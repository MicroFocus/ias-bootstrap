import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ColorPickerColor, ColorService } from '@ux-aspects/ux-aspects';

@Component({
  selector: 'app-color-picker-basic',
  templateUrl: './color-picker-basic.component.html',
  styleUrls: ['./color-picker-basic.component.scss']
})
export class ColorPickerBasicComponent implements OnInit {
    colors: ColorPickerColor[][];
    selected: ColorPickerColor;
    columns = 4;
    buttonStyle = 'square';
    buttonSize = 'md';
    showTooltips = false;
    showInput = true;

    isPickerOpen = false;

    @ViewChild('toggleButton', { static: true }) toggleButton: ElementRef;
    @ViewChild('dropdownMenu', { static: false }) dropdownMenu: ElementRef;

    private _colorNames = [
        ['#0073e7', '#0067ad', '#007cd0', '#0090da', '#01a9e7', '#29ceff', '#e4f9ff'],
        ['#ffd92d', '#fff6ce', '#f17e12', '#e50000', '#37c26a'],
    ];

    constructor(colorService: ColorService) {
        this.colors = this._colorNames.map(row =>
            row.map(colorName => new ColorPickerColor(colorName, colorService.resolve(colorName))));
        this.selected = this.colors[0][0];
    }

    colorPickerSelectedChange(colorService: ColorService): void {
        if (!this.showInput) {
            this.isPickerOpen = false;
        }
    }

    @HostListener('document:click', ['$event.target'])
    private clickHandler(target: Node): void {
        // Close on outside click
        if (
            !this.toggleButton.nativeElement.contains(target) &&
            !this.dropdownMenu.nativeElement.contains(target)
        ) {
            this.isPickerOpen = false;
        }
    }

  ngOnInit() {
  }

}
