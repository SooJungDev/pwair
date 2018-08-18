
import Chart from 'chart.js'

export const ChartPlugin={
    install(Vue, options){
        this.prototype.Chart= Chart;
    }
}