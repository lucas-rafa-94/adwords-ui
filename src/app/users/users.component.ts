import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {UsersService} from '../services/users/users.service';
import {TokenService} from '../services/token/token.service';

@Component({
  selector: 'app-download',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    criaOrUpdateOpen;
    createOpen;
    getService;
    showSpinner;
    campanhas;
    access_token;
    tokenService;
    deleteOpen;
    statusApi = 0;
    campanhaSelecionada = {
        id: '',
        nome: '',
        dataInicio: '',
        dataFim: '',
        budget: ''
    }
    visualizacaoOpen;
    confirmaDelete;
    p: number = 1;

    getTokenSession() {
        if (!localStorage.getItem('currentToken') || localStorage.getItem('currentToken') === '') {
            this.router.navigate(['']);
        }
    }

    createCampanha(){
        if(this.createOpen) {
            return true;
        } else {
            return false;
        }
    }

    constructor(private router: Router, service: UsersService , private modalService: NgbModal, tokenService: TokenService) {
        this.getTokenSession();
        this.getService = service;
        this.tokenService = tokenService;
        this.visualizacaoOpen = true;
        this.criaOrUpdateOpen = false;
        this.createOpen = false;
        this.deleteOpen = false;
        this.confirmaDelete = false;
        this.getCampanhas();
        this.showSpinner = true;
    }



    ngOnInit() {
    }

    createClose() {
        this.statusApi = 0;
        this.criaOrUpdateOpen = false;
        this.createOpen = false;
        this.visualizacaoOpen = true;
        this.getCampanhas();
    }

    openCreate() {
        this.campanhaSelecionada = {
            id: '',
            nome: '',
            dataInicio: '',
            dataFim: '',
            budget: ''
        };
        this.criaOrUpdateOpen = false;
        this.visualizacaoOpen = false;
        this.createOpen = true;
    }

    deleteClose() {
        this.statusApi = 0
        this.getCampanhas();
        this.criaOrUpdateOpen = false;
        this.createOpen = false;
        this.deleteOpen = false;
        this.visualizacaoOpen = true;
    }

    openDelete(campanha) {
        this.campanhaSelecionada = campanha;
        this.criaOrUpdateOpen = false;
        this.visualizacaoOpen = false;
        this.createOpen = false;
        this.deleteOpen = true;
    }

    deleteCampanha() {
        if (this.deleteOpen) {
            return true;
        } else {
            return false;
        }
    }

    visualizacao(){
        if(this.visualizacaoOpen) {
            return true;
        } else {
            return false;
        }
    }

    updateCampanha(){
        if(this.criaOrUpdateOpen) {
            return true;
        } else {
            return false;
        }
    }

    updateClose() {
        this.statusApi = 0;
        this.criaOrUpdateOpen = false;
        this.createOpen = false;
        this.visualizacaoOpen = true;
        this.getCampanhas();
    }


    openEditar(campanha) {
        this.campanhaSelecionada = campanha;
        this.criaOrUpdateOpen = true;
        this.visualizacaoOpen = false;
        this.createOpen = false;
    }

    getCampanhas() {
        this.showSpinner = true;
                this.getService.getCampanhas(localStorage.getItem('customerId')).subscribe(
                    datain => {
                        console.log(datain.status);
                        if (datain.status === 200) {
                            console.log(datain);
                            this.campanhas = datain;
                        } else {
                            console.log(datain);
                            this.campanhas = datain;
                        }
                        this.showSpinner = false;
                    },
                    errorin => {
                        console.log(errorin);
                        this.showSpinner = false;
                    }
                );

    }

    updateCampanhaAcao(campanha){
        this.showSpinner = true;
        this.getService.updateCampanha(campanha, localStorage.getItem('customerId')).subscribe(
            data => {
                // console.log(data.status);
                this.campanhas = data;
                this.statusApi = 1;
                this.showSpinner = false;
            },
            error => {
                console.log(error);
                this.statusApi = 2;
                this.showSpinner = false;
            }
        );
    }
    createCampanhaAcao(campanha){
        this.showSpinner = true;
        this.getService.createCampanha(campanha, localStorage.getItem('customerId')).subscribe(
            data => {
                // console.log(data.status);
                this.campanhas = data;
                this.showSpinner = false;
                this.statusApi = 1;
            },
            error => {
                console.log(error);
                this.statusApi = 2;
                this.showSpinner = false;
            }
        );
    }
    deleteCampanhaAcao(campanha) {
        this.showSpinner = true;
                this.getService.deleteCampanha(campanha.id, localStorage.getItem('customerId')).subscribe(
                    data => {
                        this.showSpinner = false;
                        this.getCampanhas();
                        this.deleteClose();
                        this.statusApi = 1;
                    },
                    error => {
                        this.showSpinner = false;
                        this.statusApi = 2;
                        }
                );

    }

    submitSucesso() {
        if (this.statusApi === 1) {
            return true;
        } else {
            return false;
        };
    }
    submitFalha() {
        if (this.statusApi === 2) {
            return true;
        } else {
            return false;
        };
    }


}
