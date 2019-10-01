export class Traitement {
  	nom : string;
  	desc : string;
  	type : number;
  	type_text : string;
  	dateCreation : Date;
  	dateModif : Date;
  	dateSuppr : Date;
	data: string;
	resp_trt: string;
	resp_service: string;
	dpo: string;
	finalites: string;
	acteurs: string;
	securite: string;
	hebergement: string;
	hors_ue: boolean;

  constructor(nom: string){
    this.nom=nom;
    /*this.dateCreation=new Date();*/
  }
}
