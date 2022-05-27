import { Type } from '@angular/core';
import { ComponentFixture, TestBed, TestBedStatic, TestModuleMetadata } from '@angular/core/testing';
import { WebStorageService } from './services/web-storage.service';

//Esta clase me genera un testBed común a todos los tests; revisar para el testing de Kerb.
//Creada con ng g class nombre
export class CustomTestBed implements Partial <TestBed>{
    //Partial es un tipo utilidad: devielve una versión del tipo que le pases con todas las propiedades seteadas como opcionales

    public static configureTestingModule(config: Partial<TestModuleMetadata>): TestBedStatic {
        ///aquí meto todo lo que quiera inyectar
        const defaults: Partial<TestModuleMetadata> = {
          declarations: [],
          providers: [
            { provide: WebStorageService, useValue: jasmine.createSpyObj('WebStorageService', [ 'getRemote', 'setRemote' ]) }
          ]
        };
    
        return TestBed.configureTestingModule({
            //con object.assign mergeo las dependencias default con las que le paso en las líneas anteriores
          declarations: Object.assign([], defaults.declarations, config.declarations),
          providers: Object.assign([], defaults.providers, config.providers)
        });
      }
    
      public static compileComponents(): Promise<any> {
        return TestBed.compileComponents();
      }
    
      public static createComponent<T>(component: Type<T>): ComponentFixture<T> {
        return TestBed.createComponent(component);
      }
}
