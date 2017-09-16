import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    vingadores: Array<Vingador>;
    selecionado: Vingador;
    novo: Vingador = new Vingador(0, '', '','');

    constructor() {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Captain_America_cosplay_o.jpg', 'Steve Rogers'),
            new Vingador(2, 'Viúva Negra','http://www.papodeblogueiro.com/wp-content/uploads/2014/02/viuva-negra-pode-ganhar-um-filme-solo.jpg', 'Natasha Romanoff'),
            new Vingador(3, 'Ms. Marvel','https://vignette2.wikia.nocookie.net/marveldatabase/images/4/48/Ms_Marvel_Vol_2_43_page_00_Carol_Danvers_%28Earth-616%29.png/revision/latest?cb=20100117022415', 'Carol Danvers'),
            new Vingador(4, 'Deadpool', 'http://s3.foxmovies.com/foxmovies/production/films/103/images/featured_content/111-front.jpg', 'Wade Wilson'),
            new Vingador(5, 'Gavião Arqueiro','http://br.web.img3.acsta.net/newsv7/14/08/25/23/29/422721.jpg', 'Clint Barton')
        ];
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    cadastrar(): void {
        const novoId: number = this.vingadores.length + 1;
        this.vingadores.push(new Vingador(novoId, this.novo.nome, this.novo.URL,this.novo.pessoa));
        this.novo = new Vingador(0, '','','');
    }

    excluir(item): void{
        delete this.vingadores[item-1];
    }
}
