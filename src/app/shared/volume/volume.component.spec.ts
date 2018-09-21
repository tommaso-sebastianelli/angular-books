import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginatorModule, MatCardModule, MatMenuModule, MatSidenavModule, MatDialogModule, MatPaginator } from '@angular/material';
import { VolumeComponent } from './volume.component';
import { VolumeStub } from './volume.stub';
import { By } from '@angular/platform-browser';

describe('VolumeComponent', () => {
	let component: VolumeComponent;
	let fixture: ComponentFixture<VolumeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule(
			{
				imports: [
					MatCardModule,
					MatMenuModule
				],
				declarations: [VolumeComponent]
			}
		)
			.compileComponents().then(() => {
				fixture = TestBed.createComponent(VolumeComponent);
				component = fixture.componentInstance;
				component.data = VolumeStub;
				fixture.detectChanges();
			});
	}));

	beforeEach(() => {
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should render DOM data', () => {
		let title = fixture.debugElement.query(By.css('mat-card-title'));
		let authors = fixture.debugElement.queryAll(By.css('.author span'));
		let editor = fixture.debugElement.query(By.css('.editor span'));
		expect(title.nativeElement.textContent).toMatch('test');
		expect(authors.length).toEqual(2);
		expect(authors[0].nativeElement.textContent).toMatch('dummy-author-1');
		expect(editor.nativeElement.textContent).toMatch('dummy-publisher');
	});
});
