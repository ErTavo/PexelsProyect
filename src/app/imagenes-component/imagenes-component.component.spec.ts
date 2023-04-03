import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImagenesComponent } from './imagenes-component.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ImagenesComponent', () => {
  let component: ImagenesComponent;
  let fixture: ComponentFixture<ImagenesComponent>;

  const mockPhotos = [
    {
      id: 1,
      src: {
        medium: 'https://example.com/image1.jpg'
      }
    },
    {
      id: 2,
      src: {
        medium: 'https://example.com/image2.jpg'
      }
    }
  ] as { id: number, src: { medium: string } }[];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load photos', () => {
    const httpClientSpy = spyOn(TestBed.inject(HttpClient), 'get').and.returnValue(of({ photos: mockPhotos }));

    component.loadPhotos();
    expect(httpClientSpy).toHaveBeenCalled();
    expect(component.photos).toEqual(mockPhotos);
  });
});
