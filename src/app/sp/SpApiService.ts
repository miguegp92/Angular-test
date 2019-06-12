import { sp, Web } from "@pnp/sp";

class SPConfiguration {
    static init = (() => {
      sp.setup({
        sp: {
          headers: {
            'Accept': 'application/json; odata=verbose'
          }
        }
      });
    })();  // Esto hace que se inicie automáticamente el servicio
}
export class mySpApi {
    
    proxyLocal = 'http://localhost:8080';
    sharepointHost = 'https://share.enel.com/sites/BOC_GGCC_PYMES/PromotoresPREPRO';
    web: Web;
    hostFinal;
    constructor(){
        //Inicializamos variables para el objeto window
        window['sp'] = sp;
        window['Web'] = Web;
        window['mySpApi'] = this;

        const hostFinal = this.sharepointHost.replace('https://share.enel.com', this.proxyLocal);
        this.hostFinal = hostFinal;
        this.web = new Web(hostFinal);
    }
    getItemContratos(): Promise<any> {
        return this.web.lists.getByTitle('preprod_fincas').items.getAll();
     }
}