import { Component, OnInit } from '@angular/core';
import { Traitement } from '../traitement-item';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CommentItem } from '../comment-item';

@Component({
  selector: 'app-creer-trt',
  templateUrl: './creer-trt.component.html',
  styleUrls: ['./creer-trt.component.css']
})
export class CreerTrtComponent implements OnInit {

	nom: string;
	desc: string;
	type: number;
	type_text: string;
	list_type = ['enregistrement', 'modification', 'suppression'];
	dateCreation: Date = new Date();
	dateModif: Date;
	dateSuppr: Date;
	data: string;
	resp_trt: string;
	resp_service: string;
	dpo: string;
	finalites: string;
	acteurs: string;
	securite: string;
	hebergement: string;
	hors_ue: boolean;

	retourBack: string;
	apiURL = 'http://localhost:3000';
	items : CommentItem[];

	// Http Options
	httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/json'})
	  };  

	// Error handling 
  	handleError(error) {
		let errorMessage = '';
		if(error.error instanceof ErrorEvent) {
		// Get client-side error
		errorMessage = error.error.message;
		} else {
		// Get server-side error
		errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
 	}

  list_trt : Traitement[] = [
  
    /*{nom: 'test', desc: '', type: 1, dateCreation: new Date(), dateModif: null, dateSuppr: null},
    {nom: 'test2', desc: '', type: 1, dateCreation: new Date(), dateModif: null, dateSuppr: null}*/
  ];

  constructor(private http:HttpClient) {

	}

  ngOnInit() {
  }

  save() : void{


  		window.alert('save')
  	if (!(this.nom.length>0 ||
  		this.desc.length>0 ||
  		this.type_text.length>0 ||
  		this.dateCreation != null ||
  		this.data.length>0 ||
  		this.resp_trt.length>0 ||
  		this.resp_service.length>0 ||
  		this.dpo.length>0 ||
  		this.finalites.length>0 ||
  		this.acteurs.length>0 ||
  		this.securite.length>0 ||
  		this.finalites.length>0 ||
  		this.hebergement.length>0 )) {
  		window.alert('Tous les champs doivent être renseignés pour valider la soumission du traitement')
  	} else {

	    let trt = new Traitement(this.nom);
	    trt.desc = this.desc
	    trt.type_text = this.type_text
	    trt.dateCreation = this.dateCreation
	    trt.data = this.data
	    trt.resp_trt = this.resp_trt
	    trt.resp_service = this.resp_service
	    trt.dpo = this.dpo
	    trt.finalites = this.finalites
	    trt.acteurs = this.acteurs
	    trt.securite = this.securite
	    trt.finalites = this.finalites
	    trt.hebergement = this.hebergement
	    trt.hors_ue = this.hors_ue;

	    this.list_trt.push(trt);
  	}
  }

  getcomments(): Observable<CommentItem[]> {
    return this.http.get<CommentItem[]>(this.apiURL + '/comments')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  ping() {
	
	//let reponse: Observable<string>;
	//this.retourBack = 
	//reponse = this.http.get('http://localhost:3000/ping', httpOptions);
	
	this.getcomments().subscribe(items => this.items = items);
	
  }
}
