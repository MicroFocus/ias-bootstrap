import { Component } from '@angular/core';
import { ColorService } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-split-panel-layout',
    templateUrl: './split-panel-layout.html',
    styleUrls: ['./split-panel-layout.scss']
})
export class SplitPanelLayoutComponent {
    // configure the directive data
    barChartData: Chart.ChartDataSets[];
    barChartLabels: string[] = ['Sprint 1', 'Sprint 2', 'Sprint 3'];
    barChartOptions: Chart.ChartOptions;
    barChartLegend = false;
    barChartColors: any;

    constructor(private colorService: ColorService) {

        const borderColor = colorService.getColor('grey2').setAlpha(0.5).toRgba();
        const tooltipBackgroundColor = colorService.getColor('grey2').toHex();
        const barBorderColor = colorService.getColor('chart1').toHex();

        this.barChartData = [
            {
                data: SplitPanelLayoutComponent.generateRandomData()
            },
            {
                data: SplitPanelLayoutComponent.generateRandomData()
            },
            {
                data: SplitPanelLayoutComponent.generateRandomData()
            }
        ];

        this.barChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            hover: {
                mode: 'nearest'
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    barPercentage: 0.6,
                    categoryPercentage: 1,
                    gridLines: {
                        color: 'transparent'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 25,
                        callback: (value: any, index: any, values: any) => {
                            return value;
                        }
                    } as Chart.LinearTickOptions
                }]
            },
            tooltips: {
                backgroundColor: tooltipBackgroundColor,
                cornerRadius: 0,
                callbacks: {
                    title: (item: Chart.ChartTooltipItem[]) => {
                        return `Feature ${item[0].datasetIndex + 1}`;
                    },
                    label: (item: Chart.ChartTooltipItem) => {
                        return `${item.yLabel} commits in sprint ${item.index + 1}`;
                    }
                },
                displayColors: false
            } as any
        };

        this.barChartColors = [
            this.generateBarColors('chart1'),
            this.generateBarColors('chart2'),
            this.generateBarColors('chart3')
        ];

    }

    static generateRandomData(): number[] {

        const data: number[] = [];

        // generate random data
        for (let idx = 0; idx < 4; idx++) {
            data.push(Math.floor(Math.random() * 30));
        }

        return data;
    }

    generateBarColors(baseColor: string) {

        const backgroundColors = [];
        const hoverColors = [];

        for (let idx = 0; idx < 13; idx++) {

            backgroundColors.push(
                this.colorService.getColor(baseColor)
                    .setAlpha(idx < 10 ? 0.7 : 0.3)
                    .toRgba());

            hoverColors.push(
                this.colorService.getColor(baseColor)
                    .setAlpha(idx < 10 ? 0.8 : 0.4)
                    .toRgba());
        }

        return {
            backgroundColor: backgroundColors,
            hoverBackgroundColor: hoverColors
        };
    }
}
