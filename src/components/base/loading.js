import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
class Loading extends PolymerElement {
  static get name() {
    return 'g-loading'
  }
  static get properties() {
    return {
      size: {
        type: String,
        value: 'small'
      }
    }
  }
  static get template() {
    return html`
          <style>
          .g-loading{
            vertical-align: middle;
            width: 22px;
            height: 22px;
            display: inline-block;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAYFBMVEUAAAD/ewD/cRn/fQD/fAD/fgD/hAD/fAD/fQD/eQD/hAD/Xzf/egD/egD/gQD/hAD/fQD/hAD/hAD/fAD/fAD/fAD/ewD/hAD/eQD/eQD/eQD/eQD/eQD/eQD/eAD/hABLrjrTAAAAH3RSTlMAEwlPQxxiOSIsqg90J5/ia7jxxzKGfZRZ2dGLvrGascNqHAAABH9JREFUWMPVmNta3CAUhYdzIEAghJxH3/8tu4Fp01brHIIXXV74qeP/LddebOJcHhUidum6ZQ1e2U1zKhHGlxpq3N6/v7/3XbeGq42aUMnaClwsYvde1Pc9ON9V5JSdB7fDGJLjQ/163Rw16CyZkSksC8TcH+guqJE058k6btv2Zn1Yl5/4PkxOsKcy/YTcSNAg6Oyi9Uv/0/UbN49T8ZfNawRxmwo3253SFD3MxV+/AjWS8s13tzHauXnQLn4kdOqmvbjuFJf4rN1DLRN8CoXstcB3sPhhNAjRUeUx9vso2i+4WYn/qJAhW8jkMNL2Dhg/d9jpuHeFPOB6WFAruSpkPeCvgsDPb74b2WvzKbdtM/el424LeWaf2G1Bry5vRLLnzpIPZ/AUFzzP2fMyDR9GgBCATyw/7lPrAmd/n34An7rFpPb9EcbBzeBzl9e4poW0DX8EnMD45O1FbdenZqCqhkHMpT26RIF/N8zA8FkNKYzOO3Y0glUwDByiIItlEkcQNQyDZAxHyhnMahguz2HQ5bKMCreC4VLmULpcG4wg5TS+JuGAC0lc6mjYlj4dkjYZZhXBjfZd31nKLjiDSxKVxtdDL0Q6HE1FcEuhcf2uSTocTQNJ1JJ0sORC5DcwrgZGs+r6ddKpEw2rCMZpxy0qXoBbFQyFW/tObfXBcgxd56cb+FJPBprc7Rae001dcOMAHNQ3gLlabmBTFcxu4MbI6uD1u8Gy+Y/A9hvATq2LL2CDcNUeA3jKYMlqHmntlxV2BTNyqAoexn0JNsIBkcPQ1Fv0WGxhCWkfJ7CpNz1E3tZujw62mxRC1pueSSfa6/kGZrWyaAXMblGcwp0H4KFB1ZKIUApL5AUjM4h6vWDc7muIAoziZkiWca0WX0O4aokBDCGn8VV6XpnCutvyPxlkQelQJwvD7br6kWabmAFYVKkyouN1XRU3uHwpKa2TcsOtD2Gi6BaMEZTSCiljEX3YlZb5qzI+8Ny0FRIOwW8E/fYOHa0wP0SiCkE5eXDQQM+HgQet/O5/JXykLE4dbCz5BFzrzO/fhGIQQsWZZjAIYg+qdPggM0HJqZgRjcp7PxH093tcFDy/TkbCWe+PIA4xCON1MhLaqsQVx68fYbxOBr/T1fsS8AdyI0giC4Zf4SrgRsI+XXkmk8mzrcOMAvd6Be4/WoUMzeTnTgo2ZJyUAr+zAe6/yfOcgm4fxSJJRquUsnGWwP2CPAOZPPpA0BrqYuaOJPm9Q+bJdHMXjRETRE8WsNMdLliAbsycZ7RB+N5LXczczdE7XSoXVUbzjEYYf24WAZaPkwVNIxfokXFA7TjProEtG9TiDxFIQWc3RuDC1Bw1j80a/kaa0M5xXtgMHWKNTD/WcXoDs1Mc58PuQ6Zn7kA345SKorSqONdj3KYJuFHP9InzVK5BIABbgzK/yLkCBW1x1Pzpawe34JqSTB7zB2gExbhlbqIS8aGTDwYy0GLbZWgEKgg+j9rx+cRVBqXKkyJzCaXEkksujra8iGZmEDSxAf6rhOLO4QH9AD40UxJfX+cqAAAAAElFTkSuQmCC);
            background-repeat: no-repeat;
            background-size: cover;
            transform-origin: center center;
            animation-name: loading;
            animation-duration: 1.2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            -webkit-transform-origin: center center;
            -webkit-animation-name: loading;
            -webkit-animation-duration: 1.2s;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite
        }
        .g-loading.small{
          width: 22px;
            height: 22px;
        }
        .g-loading.middle{
          width: 28px;
          height: 28px;
        }
        .g-loading.large{
          width: 40px;
            height: 40px;
        }
        @keyframes loading {
            0% {
                -webkit-transform: rotate(0)
            }
            50% {
                -webkit-transform: rotate(180deg)
            }
            to {
                -webkit-transform: rotate(1turn)
            }
        }
        
          </style>
          <div class$="g-loading [[size]]" >
          </div>
        `
  }
  }
export default Loading
