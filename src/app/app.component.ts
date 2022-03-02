import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactoService } from './services/contacto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userContacto!: FormGroup
  listContactos: any[] = []

  constructor(
    private contactoService: ContactoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.userContacto = this.fb.group({
      Email: [null],
      Nombre: [null],
      Apellido: [null],
      Telefono: [null]
    })


    this.contactoService.getAll().subscribe((contactos:any)=>{

      console.log(contactos);
      
      this.listContactos = contactos
       
     })


  }

  onSave() {
    console.log(this.userContacto.value);
    this.contactoService.saveContacto(this.userContacto.value).subscribe((data) => {
  

      this.contactoService.getAll().subscribe((contactos:any)=>{
       this.listContactos = contactos
        
      })
    })
  }

}
