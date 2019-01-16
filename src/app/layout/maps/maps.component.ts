/// <reference types="@types/googlemaps" />
import { MapsService } from './maps.service';
import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

declare var $:any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'Meu primeiro projeto?';
  lat: number = -16.6902082;
  lng: number = -49.2759025;
  latitude: number;
  longitude: number;
  local = '';
  public searchControl: FormControl;
  zoom: number = 13;
  ms_event: string = '';
  lastWindow: any;
  filteredImoveis: any;
  

  imoveis = [
    {
      "id": 1,
      "codImovel": 5224,
      "valorVenda" : "225.350",
      "informacoesImovel" : {
        "descricao": "Imóvel bem localizado, prédio recentemente construído, com ótima vista e vizinhança.",
        "vagasCarro": 3,
        "quartos": 3,
        "andar": 5,
        "pet": true,
        "condominio": true,
      },
      "localizacao": {
        "logradouro": "Avenida Mutirão",
        "numero": null,
        "setor": "Setor Marista"
      },
      "condominio" : {

      },
      "imageUrlArray" : [{
        url: '/assets/img/casa.jpg',
      }, {
        url: '/assets/img/casa1.jpg',
      }],
      "dadosAquisicao": [
        {
          "titulo": "Não possuir antecedentes criminais.",
          "descricao": "O comprador não pode possuir antecedentes criminais."
        },
        {
          "titulo": "Enviar dados em forma digital, para que possa feita a análise e crédito.",
          "descricao": "A análise de crédito somente será feita após o envio."
        }
      ],
      "marker": 
        {
          lat: -16.6902082,
          lng: -49.2759025,
          label: 'A',
          draggable: true,
          id: 1
        },
    },
    {
      "id": 2,
      "codImovel": 753,
      "valorVenda" : "470.00",
      "informacoesImovel" : {
        "descricao": "Apartamento com bela vista da cidade.",
        "vagasCarro": 1,
        "quartos": 2,
        "andar": 14,
        "pet": false,
        "condominio": true,
      },
      "localizacao": {
        "logradouro": "Rua Abacate",
        "numero": 5632,
        "setor": "Setor Bueno"
      },
      "condominio" : {

      },
      "imageUrlArray" : [{
        url: '/assets/img/casa2.jpg',
      }, {
        url: '/assets/img/casa3.jpg',
      }],
      "dadosAquisicao": [
        {
          "titulo": "Não possuir antecedentes criminais.",
          "descricao": "O comprador não pode possuir antecedentes criminais."
        },
        {
          "titulo": "Enviar dados em forma digital, para que possa feita a análise e crédito.",
          "descricao": "A análise de crédito somente será feita após o envio."
        }
      ],
      "marker": {
        lat: -16.7103527,
        lng: -49.3127187,
        label: 'B',
        draggable: false,
        id: 2
      },
    },
    {
      "id": 3,
      "codImovel": 1254,
      "valorVenda" : "500.100",
      "informacoesImovel" : {
        "descricao": "É um imóvel recem construído, então está em perfeitas condições.",
        "vagasCarro": 3,
        "quartos": 3,
        "andar": -1,
        "pet": true,
        "condominio": false,
      },
      "localizacao": {
        "logradouro": "Avenida D",
        "numero": null,
        "setor": "Setor Oeste"
      },
      "condominio" : {

      },
      "imageUrlArray" : [{
        url: '/assets/img/casa4.jpeg',
      }, {
        url: '/assets/img/casa5.jpg',
      }],
      "dadosAquisicao": [
        {
          "titulo": "Não possuir antecedentes criminais.",
          "descricao": "O comprador não pode possuir antecedentes criminais."
        },
        {
          "titulo": "Enviar dados em forma digital, para que possa feita a análise e crédito.",
          "descricao": "A análise de crédito somente será feita após o envio."
        }
      ],
      "marker" : {
        lat: -16.7076654,
        lng: -49.2753152,
        label: 'C',
        draggable: true,
        id: 3
      }
    },
    {
      "id": 4,
      "codImovel": 364,
      "valorVenda" : "300.000",
      "informacoesImovel" : {
        "descricao": "Imóvel bem localizado, próximo ao vaca brava.",
        "vagasCarro": 1,
        "quartos": 2,
        "andar": 6,
        "pet": true,
        "condominio": true,
      },
      "localizacao": {
        "logradouro": "Avenida T-10",
        "numero": null,
        "setor": "Setor Bueno"
      },
      "condominio" : {

      },
      "imageUrlArray" : [{
        url: '/assets/img/casa6.jpg',
      }, {
        url: '/assets/img/casa7.jpg',
      }],
      "dadosAquisicao": [
        {
          "titulo": "Não possuir antecedentes criminais.",
          "descricao": "O comprador não pode possuir antecedentes criminais."
        },
        {
          "titulo": "Enviar dados em forma digital, para que possa feita a análise e crédito.",
          "descricao": "A análise de crédito somente será feita após o envio."
        }
      ],
      "marker" : {
        lat: -16.6858119,
        lng: -49.2853824,
        label: 'D',
        draggable: true,
        id: 4
      }
    },
    {
      "id": 5,
      "codImovel": 1234,
      "valorVenda" : "650.000",
      "informacoesImovel" : {
        "descricao": "Prédio com arquitetura moderna, e com excelente serviços de condominio.",
        "vagasCarro": 1,
        "quartos": 3,
        "andar": 7,
        "pet": false,
        "condominio": true,
      },
      "localizacao": {
        "logradouro": "Avenida T-7",
        "numero": null,
        "setor": "Setor Bueno"
      },
      "condominio" : {

      },
      "imageUrlArray" : [{
        url: '/assets/img/casa8.jpg',
      }, {
        url: '/assets/img/casa9.jpg',
      }],
      "dadosAquisicao": [
        {
          "titulo": "Não possuir antecedentes criminais.",
          "descricao": "O comprador não pode possuir antecedentes criminais."
        },
        {
          "titulo": "Enviar dados em forma digital, para que possa feita a análise e crédito.",
          "descricao": "A análise de crédito somente será feita após o envio."
        }
      ],
      "marker" : {
        lat: -16.7032361,
        lng: -49.2740574,
        label: 'E',
        draggable: true,
        id: 5
      }
    }
  ];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
    private _mapsService: MapsService
  ) { }

  ngOnInit() {
    this.filteredImoveis = this.imoveis;
  }

  private imageView() {
    alert("Em construção!")
  }

  public getCoords() {
    if( this.local == ''){
      alert('Not to showwingg');
    } else {
      alert(this.local)
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  public mouseEnter(valor) {
      this.ms_event = valor;
  }

  public openDetail(imovel) {
    this._mapsService.setObj(imovel);
    this.router.navigate(['/maps/form']);
  }

 public onMouseOver(infoWindow, gm) {

    if(this.lastWindow != undefined){
      this.lastWindow.close();
    }

    if (gm.lastOpen && gm.lastOpen.isOpen) {
      gm.lastOpen.close();
    }
  
    gm.lastOpen = infoWindow;
  
    infoWindow.open();
    this.lastWindow = infoWindow;
  }

  public checkMarkersInBounds(bounds) {
    
    this.filteredImoveis = [];

    for(let imovel of this.imoveis){

      let position = {lat: imovel.marker.lat, lng: imovel.marker.lng};

      if (bounds.contains(position)){
        this.filteredImoveis.push(imovel);
      }
    }
  }

}


export interface IImage {
  url: string | null;
  href?: string;
  clickAction?: Function;
  caption?: string;
  title?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

