import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
class Button extends PolymerElement {
    static get name() {
        return 'g-button';
    }
    static get properties() {
        return {
          text: {
            type: String,
            value: '按钮'
          },
          type:{
              type:String,
              value:'default'
          }
        }
      }
    // connectedCallback() {
    //     this.initShadowDom();
    // }

    // initShadowDom() {
        // @polymer默认生成shadowDom
    //     let shadowRoot = this.attachShadow({mode: 'open'});
    //     shadowRoot.innerHTML = this.template;
    // }

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
                color: #000;
                background-color: #fff;
                border: 1px solid #ddd;
            }
            :host([type="primary"]) .g-button {
                color: #fff;
                background-color: #108ee9;
                border: 1px solid #108ee9;
            }
          </style>
          <button class="btn g-button">
            <span>[[text]]</span>
          </button>
        `;
      }
  }
  export default Button