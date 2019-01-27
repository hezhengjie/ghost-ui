import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
class Button extends PolymerElement {
  static get name() {
    return 'g-button'
  }
  static get properties() {
    return {
      text: {
        type: String,
        value: '按钮'
      },
      type: {
        type: String,
        value: 'default'
      },
      bg: {
        type: String,
        vaule: ''
      },
      border: {
        type: String,
        vaule: ''
      },
      color: {
        type: String,
        vaule: ''
      }
    }
  }
  static get template() {
    return html`
          <style>
            .btn {
              width: 100%;
            }
            .g-button {
                width: 100%;
                display: inline-block;
                outline: 0 none;
                -webkit-appearance: none;
                -webkit-box-sizing: border-box;
                padding: 0;
                text-align: center;
                font-size: 18px;
                height: 42px;
                line-height: 41px;
                border-radius:4px;
                -webkit-background-clip: padding-box;
                border: 1px solid #ccc;
                background: none;
                color: #333;
                border-radius: 20px;
            }
            :host([type="primary"]) .g-button {
                color: #fff;
                border: 1px solid #f63;
                background-color: #f63;
            }
            :host([disabled]) .g-button{
              color: #fff;
              background-color: #CCCCCC;
              border: 1px solid #ccc;
            }
          </style>
          <button class="btn g-button" style$="background-color:[[bg]];color:[[color]];border:[[border]]">
            <span>[[text]]</span>
          </button>
        `
  }
  }
export default Button
