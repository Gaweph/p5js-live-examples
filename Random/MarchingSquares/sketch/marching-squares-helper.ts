class MarchingSquaresHelper {
    // http://www.huderlem.com/demos/marchingsquares.html
    //  1-- 2
    //  |   |
    //  8---4
    static drawForCombination(x: number, y: number, bitmask: string) {

        var drawMesh = false;
        var drawLine = true;

        var midpoint = 0.5;
        var xPos = (x + 1) * PARAMS.gridSize;
        var yPos = (y + 1) * PARAMS.gridSize;
        var xZero = (x) * PARAMS.gridSize;
        var yZero = (y) * PARAMS.gridSize;
        var xMidpoint = xPos - (PARAMS.gridSize / 2);
        var yMidpoint = yPos - (PARAMS.gridSize / 2);

        if (bitmask == '0000') {
            // nothing
        }
        else if (bitmask == '0001') {
            if (drawLine) line(xZero, yMidpoint, xMidpoint, yZero);
            if (drawMesh) {
                beginShape();
                vertex(0, midpoint);
                vertex(midpoint, 0);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '0010') {
            if (drawLine) line(xPos - (PARAMS.gridSize / 2), yZero, xPos, yMidpoint);
            if (drawMesh) {
                beginShape();
                vertex(1 - midpoint, 0);
                vertex(1, midpoint);
                vertex(1, 0);
                endShape();
            }
        }
        else if (bitmask == '0011') {
            if (drawLine) line(xZero, yMidpoint, xPos, yMidpoint);
            if (drawMesh) {
                beginShape();
                vertex(0, midpoint);
                vertex(1, midpoint);
                vertex(1, 0);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '0100') {
            if (drawLine) line(xPos - (PARAMS.gridSize / 2), yPos, xPos, yPos - (PARAMS.gridSize / 2));
            if (drawMesh) {
                beginShape();
                vertex(1 - midpoint, 1);
                vertex(1, 1 - midpoint);
                vertex(1, 1);
                endShape();
            }
        }
        else if (bitmask == '0101') {
            //pop();
            MarchingSquaresHelper.drawForCombination(x, y, '0001');
            //pop();
            MarchingSquaresHelper.drawForCombination(x, y, '0100');
        }
        else if (bitmask == '0110') {
            if (drawLine) line(xMidpoint, yZero, xMidpoint, yPos);
            if (drawMesh) {
                beginShape();
                vertex(midpoint, 0);
                vertex(midpoint, 1);
                vertex(1, 1);
                vertex(1, 0);
                endShape();
            }
        }
        else if (bitmask == '0111') {
            if (drawLine) line(xZero, yPos - (PARAMS.gridSize / 2), xMidpoint, yPos);
            if (drawMesh) {
                beginShape();
                vertex(0, 1 - midpoint);
                vertex(midpoint, 1);
                vertex(1, 1);
                vertex(1, 0);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '1000') {
            if (drawLine) line(xZero, yPos - (PARAMS.gridSize / 2), xMidpoint, yPos);
            if (drawMesh) {
                beginShape();
                vertex(0, 1 - midpoint);
                vertex(midpoint, 1);
                vertex(0, 1); y
                endShape();
            }
        }
        else if (bitmask == '1001') {
            if (drawLine) line(xPos - (PARAMS.gridSize / 2), yZero, xPos - (PARAMS.gridSize / 2), yPos);
            if (drawMesh) {
                beginShape();
                vertex(1 - midpoint, 0);
                vertex(1 - midpoint, 1);
                vertex(0, 1);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '1010') {
            MarchingSquaresHelper.drawForCombination(x, y, '0010');
            MarchingSquaresHelper.drawForCombination(x, y, '1000');
        }
        else if (bitmask == '1011') {
            if (drawLine) line(xPos - (PARAMS.gridSize / 2), yPos, xPos, yPos - (PARAMS.gridSize / 2));
            if (drawMesh) {
                beginShape();
                vertex(1 - midpoint, 1);
                vertex(1, 1 - midpoint);
                vertex(1, 0);
                vertex(0, 0);
                vertex(0, 1);
                endShape();
            }
        }
        else if (bitmask == '1100') {
            if (drawLine) line(xZero, yPos - (PARAMS.gridSize / 2), xPos, yPos - (PARAMS.gridSize / 2));
            if (drawMesh) {
                beginShape();
                vertex(0, 1 - midpoint);
                vertex(1, 1 - midpoint);
                vertex(1, 1);
                vertex(0, 1);
                endShape();
            }
        }
        else if (bitmask == '1101') {
            if (drawLine) line(xMidpoint, yZero, xPos, yMidpoint);
            if (drawMesh) {
                beginShape();
                vertex(midpoint, 0);
                vertex(1, midpoint);
                vertex(1, 1);
                vertex(0, 1);
                vertex(0, 0);
                endShape();
            }
        }
        else if (bitmask == '1110') {
            if (drawLine) line(xMidpoint, yZero, xZero, yMidpoint);
            if (drawMesh) {
                beginShape();
                vertex(midpoint, 0);
                vertex(0, midpoint);
                vertex(0, 1);
                vertex(1, 1);
                vertex(1, 0);
                endShape();
            }
        }
        else if (bitmask == '1111') {
            // line(midpoint, 0, 0, midpoint);
            if (drawMesh) {
                beginShape();
                vertex(0, 0);
                vertex(0, 1);
                vertex(1, 1);
                vertex(1, 0);
                endShape();
            }
        }
        else {
            console.log('bad number' + bitmask);
        }
    }

    static getCurrentPointArray(points: Point[]): number[][] {

        var res: number[][] = [];

        for (var y = 0; y < height / PARAMS.gridSize; y++) {
            res[y] = [];
            for (var x = 0; x < width / PARAMS.gridSize; x++) {
                res[y][x] = 0;
            }
        }

        var maxGridX = width / PARAMS.gridSize;
        var maxGridY = height / PARAMS.gridSize;
        for (let p of points) {

            //for (var i = 0; i < p.r / 2; i++) {
            var xmin = Math.max(0, floor((p.x - p.r) / PARAMS.gridSize));
            var ymin = Math.max(0, floor((p.y - p.r) / PARAMS.gridSize));
            var xmax = Math.min(maxGridX - 1, ceil((p.x + p.r) / PARAMS.gridSize));
            var ymax = Math.min(maxGridY - 1, ceil((p.y + p.r) / PARAMS.gridSize));

            // all grid x and y touched by this point
            for (var y = ymin; y <= ymax; y++) {
                for (var x = xmin; x <= xmax; x++) {

                    var insidePoint = p.inside(x * PARAMS.gridSize, y * PARAMS.gridSize);
                    // var d = dist(p.x, p.y, x * PARAMS.gridSize, y * PARAMS.gridSize)

                    if (insidePoint >= 1) {
                        //console.log(d, p.r);
                        try {
                            res[y][x] = Math.max(insidePoint, res[y][x]);
                        } catch (ex) {
                            console.log(y, x);
                        }
                    }
                }
            }
        }

        return res;
    }

    //  1-- 2
    //  |   |
    //  8---4

    static drawSquares(pointsArr: number[][], ) {

        for (var y = 1; y < pointsArr.length - 1; y++) {
            var point = pointsArr[y];
            for (var x = 1; x < point.length - 1; x++) {

                var p1 = pointsArr[y][x] > 0 ? '1' : '0';
                var p2 = pointsArr[y][x + 1] > 0 ? '1' : '0';
                var p4 = pointsArr[y + 1][x + 1] > 0 ? '1' : '0';
                var p8 = pointsArr[y + 1][x] > 0 ? '1' : '0';

                // TODO: linear interpolation - pass in values not just 1 or 0

                stroke(PARAMS.colorsArray[floor(x * PARAMS.gridSize)]);
                MarchingSquaresHelper.drawForCombination(x, y, p8 + p4 + p2 + p1);

            }
        }


    }

}