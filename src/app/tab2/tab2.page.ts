import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public actorsList:any = []
  public previos = "";
  public next = "";
  constructor() {}

  async ngOnInit(){
    this.loadActor();
  }

  async loadActor(url="http://localhost:8000/filmes/actors/?pages=1"){
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "Authorization": "Token " + sessionStorage.getItem("token")
      }
    })
    const status = response.status
    if(status === 200){
      const data= await response.json()
      this.next = data.next
      this.previos = data.previous
      this.actorsList = this.actorsList.concat(data.results)

      this.actorsList = data.results
    }else{
      alert("Erro ao carregar")
    }
  }

  onIonInfinite(ev:any){
    setTimeout(()=>{
      if(this.next != null){
        this.loadActor(this.next);
      }
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }


}
