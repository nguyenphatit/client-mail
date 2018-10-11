import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor'
import { AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import HighlightIcon from '@material-ui/icons/Highlight';
import createHighlightPlugin from "./plugins/highlightPlugin";
import addLinkPlugin from "./plugins/addLinkPlugin";

const styles = theme => ({
    paper: {
        padding: 10,
    },
    textField: {
        width: '100%',
    },
    formFooter: {
        textAlign: 'right',
    },
    content: {
        border: '1px solid #999',
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
    }
})

const highlightPlugin = createHighlightPlugin();

class EditorDraft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }

        this.plugins = [
            highlightPlugin,
            addLinkPlugin
        ];
    }

    onChange = editorState => {
        this.setState({
            editorState
        })
    }

    handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handle';
        }
        return 'not-hanlde'
    }

    _onBoldClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "BOLD")
        )
    }

    _onItalicClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
        )
    }

    _onUnderlineClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
        )
    }

    _onStrikethroughClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, "STRIKETHROUGH")
        )
    }

    _onHighlightClick = () => {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT')
        )
    }

    _onAddLink = () => {
        const editorState = this.state.editorState;
        const selection = editorState.getSelection();
        const link = window.prompt("Paste the link -");
        if (!link) {
            this.onChange(RichUtils.toggleLink(editorState, selection, null));
            return "handled";
        }
        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
            url: link
        });
        const newEditorState = EditorState.push(
            editorState,
            contentWithEntity,
            "create-entity"
        );
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        this.onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
        return "handled";
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton color="primary" onClick={this._onBoldClick}>
                            <FormatBoldIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={this._onItalicClick}>
                            <FormatItalicIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={this._onUnderlineClick}>
                            <FormatUnderlinedIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={this._onStrikethroughClick}>
                            <FormatStrikethroughIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={this._onHighlightClick}>
                            <HighlightIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={this._onAddLink}>
                            <InsertLinkIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.content}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                        plugins={this.plugins}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(EditorDraft);