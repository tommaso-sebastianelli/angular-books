import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material';
import { PlaceholderComponent } from './placeholder.component';

describe('PlaceholderComponent', () => {
	let component: PlaceholderComponent;
	let fixture: ComponentFixture<PlaceholderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatIconModule],
			declarations: [PlaceholderComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlaceholderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
