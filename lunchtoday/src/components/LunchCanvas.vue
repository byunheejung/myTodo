<template>
    <section class="wrap-lunch">
        <div class="arrow"></div>
        <div class="lunchCircle">
            <canvas id="lunchMenuCircle" width="500" height="500"></canvas>
        </div>
    </section>
</template>

<script>
export default {
  name: 'LunchCanvas',
  data() {
    return {
      lunchMenu: this.$store.state.lunchMenu
    }
  },
  mounted() {
    this.drawLunchCanvas();
  },
  updated() {
    this.drawLunchCanvas();
  },
  methods: {
    byte2Hex(n) {
        let nybHexString = "0123456789ABCDEF";
        return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
    },
    RGB2Color(r,g,b) {
        return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
    },
    getColor(item, maxitem) {
        let phase = 0;
        let center = 128;
        let width = 127;
        let frequency = Math.PI*2/maxitem;
        
        let red   = Math.sin(frequency*item+2+phase) * width + center;
        let green = Math.sin(frequency*item+0+phase) * width + center;
        let blue  = Math.sin(frequency*item+4+phase) * width + center;
        
        return this.RGB2Color(red,green,blue);
    },
    getDeg(deg) {
        return deg * Math.PI/180;
    },
    drawCanvas(deg, color) {
        const canvas = document.getElementById('lunchMenuCircle');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(250,250);
        ctx.arc(250, 250, 250, this.getDeg(deg), this.getDeg(deg+(360/this.lunchMenu.length)));
        ctx.lineTo(250,250);
        ctx.fill();
    },
    drawCanvasText(deg, text) {
        const canvas = document.getElementById('lunchMenuCircle');
        const ctx = canvas.getContext('2d');
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(this.getDeg(deg));
        ctx.textAlign = "right";
        ctx.fillStyle = '#fff';
        ctx.font = "bold 15px sans-serif";
        ctx.fillText(text, 130, 10);
        ctx.restore();
    },
    drawLunchCanvas() {
        let deg = 0;
        let len = this.lunchMenu.length
        let sliceDeg = 360/len;
        let currentArr = [];
        if (len == 0) {
            const canvas = document.getElementById('lunchMenuCircle');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            return;
        }
        for(var i = 0; i < len; i++) {
            var menu = this.lunchMenu[i]
            var currentWheel = {
                'deg' : deg,
                'menu' : menu,
                'color' : this.getColor(i, len)
            }
            this.drawCanvas(deg, this.getColor(i, len));  
            this.drawCanvasText(deg + sliceDeg/2 , this.lunchMenu[i]);
            currentArr.push(currentWheel);
            deg += sliceDeg;
        }
        this.$store.commit('updateSaveWheel', currentArr);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
