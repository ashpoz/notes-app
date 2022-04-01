const Header = require('@editorjs/header');
const List = require('@editorjs/list');
const Embed = require('@editorjs/embed');
const Marker = require('@editorjs/marker');

export const editorjsConfig = {

  holder: 'editorjs',
  tools: {
    Marker :{
      class : Marker,
      shortcut : 'CMD+SHIFT+M'
    },
    header: {
      class: Header,
      inlineToolbar: [
        'link', 'bold', 'italic'
      ]
    },
    list: {
      class: List,
      inlineToolbar: [
        'link','bold'
      ]
    },
    embed : {
      class : Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    }
  },
}