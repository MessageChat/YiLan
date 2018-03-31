import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Screen } from '@blankapp/ui';
import marked from 'marked';
import RNFS from 'react-native-fs';
import Lang from '../../utilities/Lang';
import SupportedFileTypes from './SupportedFileTypes';

class MarkdownPreviewer extends Component {
  static navigationOptions = {
    title: Lang.get('screens.markdownPreviewer.title'),
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.navigationParams = this.navigation.state.params;

    this.state = {
      htmlText: '',
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      const {
        // extraFileName: fileName,
        extraFilePath: filePath,
      } = this.navigationParams;

      let htmlText;

      try {
        const text = await RNFS.readFile(filePath, 'utf8');
        htmlText = marked(text);
      } catch (error) {
        alert(error.message);
      } finally {
        this.setState({
          htmlText,
        });
      }
    });
  }

  render() {
    const htmlSource = {
      html: `
        <!doctype html>
        <html>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Marked in the browser</title>
          <style>
          /*
          * This document has been created with Marked.app <http://markedapp.com>.
          * Copyright 2011 Brett Terpstra
          * ---------------------------------------------------------------------------
          * Please leave this notice in place, along with any additional credits below.
          *
          * Byword.css theme is based on Byword.app <http://bywordapp.com>
          * Authors: @brunodecarvalho, @jpedroso, @rcabaco
          * Copyright 2011 Metaclassy, Lda. <http://metaclassy.com>
          */

          html {
            font-size: 62.5%; /* base font-size: 10px */
          }

          body {
            color: #3c3c3c;

            /* Change font size below */
            font-size: 1.7em;
            line-height: 1.4em;

            /* Change font below */

            /* Sans-serif fonts */
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;

            /* Serif fonts */
            /*
            font-family: "Cochin", "Baskerville", "Georgia", serif;
            -webkit-font-smoothing: subpixel-antialiased;
            */

            /* Monospaced fonts */
            /*
            font-family: "Courier New", Menlo, Monaco, mono;
            -webkit-font-smoothing: antialiased;
            */
          }
          a {
              color: #308bd8;
              text-decoration:none;
          }
          a:hover {
              text-decoration: underline;
          }
          /* headings */
          h1, h2 {
              line-height:1.2em;
              margin-top:32px;
              margin-bottom:12px;
          }
          h1:first-child {
              margin-top:0;
          }
          h3, h4, h5, h6 {
              margin-top:12px;
              margin-bottom:0;
          }
          h5, h6 {
              font-size:0.9em;
              line-height:1.0em;
          }
          /* end of headings */
          p {
              margin:0 0 24px 0;
          }
          p:last-child {
              margin:0;
          }
          #wrapper hr {
              width: 100%;
              margin: 3em auto;
              border: 0;
              color: #eee;
              background-color: #ccc;
              height: 1px;
              -webkit-box-shadow:0px 1px 0px rgba(255, 255, 255, 0.75);
          }
          /* lists */
          ol {
              list-style: outside decimal;
          }
          ul {
              list-style: outside disc;
          }
          ul ul {
              list-style-type: square;
          }
          ul ul ul {
              list-style-type: circle;
          }
          ol, ul {
              padding-left:0;
              margin-bottom:24px;
          }
          ol li {
              margin-left:28px;
          }
          ul li {
              margin-bottom:8px;
              margin-left:16px;
          }
          ol:last-child, ul:last-child {
              margin:0;
          }
          li > ol, li > ul {
              padding-left:12px;
          }
          dl {
              margin-bottom:24px;
          }
          dl dt {
              font-weight:bold;
              margin-bottom:8px;
          }
          dl dd {
              margin-left:0;
              margin-bottom:12px;
          }
          dl dd:last-child, dl:last-child {
              margin-bottom:0;
          }
          /* end of lists */
          pre {
              white-space: pre-wrap;
              width: 96%;
              margin-bottom: 24px;
              overflow: hidden;
              padding: 3px 10px;
              -webkit-border-radius: 3px;
              background-color: #eee;
              border: 1px solid #ddd;
          }
          code {
              white-space: nowrap;
              font-size: 1.1em;
              padding: 2px;
              -webkit-border-radius: 3px;
              background-color: #eee;
              border: 1px solid #ddd;
          }
          pre code {
              white-space: pre-wrap;
              border: none;
              padding: 0;
              background-color: transparent;
              -webkit-border-radius: 0;
          }
          blockquote {
              margin-left: 0;
              margin-right: 0;
              width: 96%;
              padding: 0 10px;
              border-left: 3px solid #ddd;
              color: #777;
              font-style: italic;
          }
          blockquote em {
              font-style: normal;
          }
          table {
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 24px;
              border-bottom: 1px solid #ddd;
              border-right: 1px solid #ddd;
              border-spacing: 0;
          }
          table th {
              padding: 3px 10px;
              background-color: #eee;
              border-top: 1px solid #ddd;
              border-left: 1px solid #ddd;
          }
          table tr {
          }
          table td {
              padding: 3px 10px;
              border-top: 1px solid #ddd;
              border-left: 1px solid #ddd;
          }
          caption {
              font-size: 1.2em;
              font-weight: bold;
              margin-bottom: 5px;
          }
          figure {
              display: block;
              text-align: center;
          }
          #wrapper img {
              border: none;
              display: block;
              margin: 1em auto;
              max-width: 100%;
          }
          figcaption {
              font-size: 0.8em;
              font-style: italic;
          }
          mark {
              background: #fefec0;
              padding:1px 3px;
          }


          /* classes */

          .markdowncitation {
          }
          .footnote {
              font-size: 0.8em;
              vertical-align: super;
          }
          .footnotes ol {
              font-weight: bold;
          }
          .footnotes ol li p {
              font-weight: normal;
          }

          /* custom formatting classes */

          .shadow {
              -webkit-box-shadow: 0 2px 4px #999;
          }

          .source {
              text-align: center;
              font-size: 0.8em;
              color: #777;
              margin: -40px;
          }

          @media screen {
            .inverted, .inverted #wrapper {
                background-color: #1a1a1a !important;
                color: #bebebe !important;

                /* SANS-SERIF */
              font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
              -webkit-font-smoothing: antialiased !important;

              /* SERIF */
              /*
              font-family: "Cochin", "Baskerville", "Georgia", serif !important;
              -webkit-font-smoothing: subpixel-antialiased !important;
              */
              /* MONO */
              /*
              font-family: "Courier", mono !important;
              -webkit-font-smoothing: antialiased !important;
              */
            }
            .inverted a {
                color: #308bd8 !important;
            }
            .inverted hr {
                color: #666 !important;
                border: 0;
                background-color: #666 !important;
                -webkit-box-shadow: none !important;
            }
            .inverted pre {
                /*background-color: #222 !important;*/
                /*border-color: #3c3c3c !important;*/
            }
            .inverted code {
                /*background-color: #222 !important;*/
                /*border-color: #3c3c3c !important;*/
                  color: #1a1a1a;
            }
            .inverted blockquote {
                border-color: #333 !important;
                color: #999 !important;
            }
            .inverted table {
                border-color: #3c3c3c !important;
            }
            .inverted table th {
                background-color: #222 !important;
                border-color: #3c3c3c !important;
            }
            .inverted table td {
                border-color: #3c3c3c !important;
            }
            .inverted mark {
                background: #bc990b !important;
                color:#000 !important;
            }
              .inverted .shadow { -webkit-box-shadow: 0 2px 4px #000 !important; }
            #wrapper {
                  background: transparent;
                  margin: 40px;
              }
          }

          /* Printing support */
          @media print {
            body {
              overflow: auto;
            }
              img, pre, blockquote, table, figure {
                  page-break-inside: avoid;
              }
              pre, code {
              border: none !important;
            }
            #wrapper {
                  background: #fff;
                  position: relative;
                  text-indent: 0px;
                  padding: 10px;
                  font-size:85%;
              }
              .footnotes {
                  page-break-before: always;
              }
          }
          </style>
        </head>
        <body>
          <div id="content">
            ${this.state.htmlText}
          </div>
        </body>
        </html>
      `,
    };
    return (
      <Screen>
        <WebView
          source={htmlSource}
        />
      </Screen>
    );
  }
}

MarkdownPreviewer.SupportedFileTypes = SupportedFileTypes;

export default MarkdownPreviewer;
