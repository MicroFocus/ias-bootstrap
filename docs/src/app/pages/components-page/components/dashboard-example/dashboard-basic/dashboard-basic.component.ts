import { Component, OnInit } from '@angular/core';
import { ColorService, DashboardOptions } from '@ux-aspects/ux-aspects';

declare const chance;

@Component({
  selector: 'app-dashboard-basic',
  templateUrl: './dashboard-basic.component.html',
  styleUrls: ['./dashboard-basic.component.scss']
})
export class DashboardBasicComponent implements OnInit {
    // configure the directive data
    lineChartData: Chart.ChartDataSets[] = [{
        data: [],
        borderWidth: 2,
        fill: false
    },
        {
            data: [],
            borderWidth: 2,
            fill: false
        }];

    lineChartOptions: Chart.ChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        elements: {
            line: {
                tension: 0
            },
            point: {
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent'
                },
                ticks: {
                    min: 0,
                    max: 49,
                    maxRotation: 0
                } as Chart.LinearTickOptions
            }],
            yAxes: [{
                gridLines: {
                    color: '#ddd'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 100
                } as Chart.LinearTickOptions,
            }]
        },
    };

    lineChartLabels: string[] = [];
    lineChartLegend = false;
    lineChartColors = [
        {
            borderColor: this.colorService.getColor('vibrant1').toHex(),
        },
        {
            borderColor: this.colorService.getColor('vibrant2').toHex(),
        }];

    options: DashboardOptions = {
        columns: 4,
        padding: 10,
        rowHeight: 220,
        emptyRow: false,
        minWidth: 187
    };

    constructor(public colorService: ColorService) {

        // generate the chart data
        for (let idx = 0; idx < 50; idx++) {

            let label = '';

            if (idx === 0) {
                label = 'Jan 1, 2017';
            }

            if (idx === 49) {
                label = 'Mar 30, 2017';
            }

            this.lineChartLabels.push(label);

            const dataset1 = this.lineChartData[0].data as Chart.ChartPoint[];
            const dataset2 = this.lineChartData[1].data as Chart.ChartPoint[];

            dataset1.push({
                x: idx,
                y: chance.integer({ min: 280, max: 460 })
            });

            dataset2.push({
                x: idx,
                y: chance.integer({ min: 50, max: 250 })
            });
        }
    }

    ngOnInit() {
    }

}
