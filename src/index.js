module.exports = function solveSudoku(matrix) {
    const correctSum = 45; //sum in one row or col or block
    const totalCells = 81; //total cells in matrix

    var resultMatrix=[];
    for (var i=0; i<9; i++){
        resultMatrix[i] = [];
        for (var j=0; j<9; j++){
            resultMatrix[i][j]= matrix[i][j];
        }
    }

    var tempValues = [
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]]
    ];

    var minRow = {position: 0, min: 0};
    var minColumn = {position: 0, min: 0};

    var solution = [];
    var amountOfZeros = 0;

    //determine empty cells
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (resultMatrix[i][j] != 0) {
                //cell has number
                tempValues[i][j] = null;

                //delete this number from all cells of this column
                for (var r = 0; r < 9; r++) {
                    if (tempValues[r][j] != null) {
                        tempValues[r][j][resultMatrix[i][j] - 1] = 0;
                    }
                }
                //delete this number from all cells of this row
                for (var c = 0; c < 9; c++) {
                    if (tempValues[i][c] != null) {
                        tempValues[i][c][resultMatrix[i][j] - 1] = 0;
                    }
                }


                //delete this number from all cells of block 3*3
                var borderM = detBlockIndexes(i);
                var borderN = detBlockIndexes(j);
                for (var m = borderM[0]; m <= borderM[1]; m++) {
                    for (var n = borderN[0]; n <= borderN[1]; n++) {
                        if (tempValues[m][n] != null) {
                            tempValues[m][n][resultMatrix[i][j] - 1] = 0;
                        }
                    }
                }


            } else {
                amountOfZeros++;
            }
        }
    }

    //create clone with array of possibleValues
    var cloneTempValues = [];
    for (var i = 0; i < 9; i++) {
        cloneTempValues[i] = [];
        for (var j = 0; j < 9; j++) {
            if (tempValues[i][j] == null) {
                cloneTempValues[i][j] = null;
            } else {
                cloneTempValues[i][j] = [];
                for (var k = 0; k < 9; k++) {
                    if (tempValues[i][j][k] > 0)
                        (cloneTempValues[i][j]).push(tempValues[i][j][k]);
                }
            }

        }
    }

    //fullfill the cells with one value
    var changes = 0;
    do {
        changes = isCellWithOnePosValue();
        if (changes == 0) {
            changes = findHiddenCandidate();
        }
    } while (changes)

    var changesPosValues = 0
    do{
        changesPosValues = findClosedCandidate();
        if (changesPosValues > 0)
        {
            do{
                var changes = findHiddenCandidate();
                if (changes == 0) {
                    changes = isCellWithOnePosValue();
                }
            }while(changes)
        }

    }while(changesPosValues)

    //make first solution
    while (solution.length < amountOfZeros){
        console.log(" needs solution");
        makeSolution();

        var madeChanges = 0;
        do {
            madeChanges = isCellWithOnePosValue();
            if (madeChanges == 0) {
                madeChanges = findHiddenCandidate();
                if (madeChanges == 0) {
                    madeChanges = findClosedCandidate();
                }
            }

        } while (madeChanges)

    }



    function makeSolution(){
        var zeroInRows =[0,0,0,0,0,0,0,0,0];
        var zeroInCols =[0,0,0,0,0,0,0,0,0];

        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                if (cloneTempValues[i][j] != null){
                    zeroInRows[i]++;
                    zeroInCols[j]++;
                }
            }
        }


        var minForRows = null;
        var minForColumns = null;
        var minForRowObject = {};
        var minForColumnObject = {};


        for (var i = 0; i < 9; i++) {
            if (zeroInRows[i] != 0) {
                if (minForRows != null) {
                    if (zeroInRows[i] < minForRows) {
                        minForRows = zeroInRows[i];
                        minForRowObject["position"] = i;
                    }
                }
                else {
                    minForRows = zeroInRows[i];
                    minForRowObject["position"] = i;
                }
            }

            if (zeroInCols[i] != 0) {
                if (minForColumns != null) {
                    if (zeroInCols[i] < minForColumns) {
                        minForColumns = zeroInCols[i];
                        minForColumnObject["position"] = i;
                    }
                } else {
                    minForColumns = zeroInCols[i];
                    minForColumnObject["position"] = i;
                }
            }
        }

        //decide that we will take row first
        if(minForRows < minForColumns){


            //take firstCell for row
            var sRow= minForRowObject["position"];
            var sCol;

            for(var k = 0; k < 9; k++){
                if( cloneTempValues[sRow][k]!= null){
                    sCol = k;
                    break;
                }
            }
        }else{
            //take first for col
            //take firstCell for row
            var sCol= minForColumnObject["position"];
            var sRow;

            for(var k = 0; k < 9; k++){
                if( cloneTempValues[k][sCol]!= null){
                    sRow = k;
                    break;
                }
            }


        }

        var altValues = [];
        for(var i = 0; i < cloneTempValues[sRow][sCol].length; i++){
            altValues.push(cloneTempValues[sRow][sCol][i]);
        }


        var sValue = altValues[altValues.length-1];
        altValues.pop();
        var beforeSolutionMatrix=[];
        for (var i=0; i<9; i++){
            beforeSolutionMatrix[i] = [];
            for (var j=0; j<9; j++){
                beforeSolutionMatrix[i][j]= cloneTempValues[i][j];
            }
        }
        writeDown(sRow, sCol, sValue, altValues, beforeSolutionMatrix);
        changeDepPosValues(sRow, sCol, sValue);

    }




    function detBlockIndexes(index) {
        if (index <= 5) {
            if (index <= 2) {
                return [0, 2];
            }
            else {
                return [3, 5]
            }

        } else {
            return [6, 8];
        }
    }

    function changeDepPosValues(row, col, value) {

        //delete this number from all cells of this column
        for (var r = 0; r < 9; r++) {
            if (cloneTempValues[r][col] != null) {
                //  tempValues[r][j][matrix[i][j] - 1] = 0;
                var pos = cloneTempValues[r][col].indexOf(value);
                if (pos >= 0) {
                    cloneTempValues[r][col].splice(pos, 1);
                    if (cloneTempValues[r][col].length == 1) {
                        setValueInCell(r, col, cloneTempValues[r][col][0], cloneTempValues);

                    } else {
                        if (cloneTempValues[r][col].length == 0) {
                            // alert("solution was incorrect");
                            // debugger;

                        }
                    }


                } else {
                    //nothing was made
                }
            }
        }
        //delete this number from all cells of this row
        for (var c = 0; c < 9; c++) {
            if (cloneTempValues[row][c] != null) {
                var pos = cloneTempValues[row][c].indexOf(value);
                if (pos >= 0) {
                    cloneTempValues[row][c].splice(pos, 1);
                    if (cloneTempValues[row][c].length == 1) {
                        setValueInCell(row, c, cloneTempValues[row][c][0], cloneTempValues);
                    }
                    else{
                        if (cloneTempValues[row][c].length == 0) {
                            //  alert("solution was incorrect");
                            //  debugger;

                        }
                    }
                } else {
                    //nothing was made
                }
            }
        }


        //delete this number from all cells of block 3*3
        var borderM = detBlockIndexes(row);
        var borderN = detBlockIndexes(col);
        for (var m = borderM[0]; m <= borderM[1]; m++) {
            for (var n = borderN[0]; n <= borderN[1]; n++) {
                if (cloneTempValues[m][n] != null) {
                    var pos = cloneTempValues[m][n].indexOf(value);
                    if (pos >= 0) {
                        cloneTempValues[m][n].splice(pos, 1);
                        if (cloneTempValues[m][n].length == 1) {
                            setValueInCell(m, n, cloneTempValues[m][n][0], cloneTempValues);
                        }
                        else{
                            if (cloneTempValues[m][n].length == 0) {
                                //    alert("solution was incorrect");
                                //   debugger;

                            }
                        }
                    } else {
                        //nothing was made
                    }
                }
            }
        }
    }


    function compareTwoArrays(arr1, arr2) {
        if (arr1.length != arr2.length) {
            return false;
        }
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
        return true;
    }

    function processHiddenCandidate(_amountOfCandidates, _candidates) {
        var isChanged = 0;
        for (var l = 0; l < 9; l++) {
            if (_amountOfCandidates[l] == 1) {
                //hidden candidate is found
                //get coordinates to writeDown;
                var coordinates = _candidates[l];
                setValueInCell(coordinates[0], coordinates[1], (l + 1));
                isChanged++;
            }
        }
        return isChanged;
    }

    function findHiddenCandidate() {
        var isChanged = 0;

        var amountOfCandidates = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var isNotNull = 0;
        var candidates = [];

        //hidden in row
        for (var i = 0; i < 9; i++) {
            //select stroka
            amountOfCandidates = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            isNotNull = 0;
            candidates = [];

            for (var j = 0; j < 9; j++) {
                if (cloneTempValues[i][j] != null) {
                    isNotNull++;
                    for (var k = 0; k < cloneTempValues[i][j].length; k++) {
                        amountOfCandidates[cloneTempValues[i][j][k] - 1]++;
                        candidates[cloneTempValues[i][j][k] - 1] = [i, j];
                    }

                }
            }
            //line was finished
            if (isNotNull) {
                isChanged += processHiddenCandidate(amountOfCandidates, candidates);

            }
        }

        //hidden in column
        for (var j = 0; j < 9; j++) {
            //select stroka
            amountOfCandidates = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            isNotNull = 0;
            candidates = [];

            for (var i = 0; i < 9; i++) {
                if (cloneTempValues[i][j] != null) {
                    isNotNull++;
                    for (var k = 0; k < cloneTempValues[i][j].length; k++) {
                        amountOfCandidates[cloneTempValues[i][j][k] - 1]++;
                        candidates[cloneTempValues[i][j][k] - 1] = [i, j];
                    }

                }
            }
            //column was finished
            if (isNotNull) {

                isChanged += processHiddenCandidate(amountOfCandidates, candidates);
            }
        }

        //hidden in block

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (cloneTempValues[i][j] != null) {
                    isNotNull++;
                    //determine block
                    amountOfCandidates = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    isNotNull = 0;
                    candidates = [];

                    var borderM = detBlockIndexes(i);
                    var borderN = detBlockIndexes(j);
                    for (var m = borderM[0]; m <= borderM[1]; m++) {
                        for (var n = borderN[0]; n <= borderN[1]; n++) {
                            if (cloneTempValues[m][n] != null) {
                                isNotNull++;
                                for (var k = 0; k < cloneTempValues[m][n].length; k++) {
                                    amountOfCandidates[cloneTempValues[m][n][k] - 1]++;
                                    candidates[cloneTempValues[m][n][k] - 1] = [m, n];
                                }
                            }
                        }
                    }

                    //block was finished
                    if (isNotNull) {

                        isChanged += processHiddenCandidate(amountOfCandidates, candidates);
                    }
                }
            }
        }
        return isChanged;
    }

    function findClosedCandidate() {
        var isChanged = 0;

        var isNotNull = 0;

        //closed in block

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (cloneTempValues[i][j] != null) {
                    //determine block
                    isNotNull = 0;

                    var borderM = detBlockIndexes(i);
                    var borderN = detBlockIndexes(j);
                    for (var m = borderM[0]; m <= borderM[1]; m++) {
                        for (var n = borderN[0]; n <= borderN[1]; n++) {
                            if (cloneTempValues[m][n] != null) {
                                isNotNull++;
                                for (var k = 0; k < cloneTempValues[m][n].length; k++) {

                                    var closedCandidate = cloneTempValues[m][n][k];
                                    var isFoundInOtherRow = findClosedRowCandidate(closedCandidate, m, borderM, borderN);
                                    if(!isFoundInOtherRow ){
                                        //closed rowCandidate

                                        isChanged = isChanged + processClosedRowCandidate(closedCandidate, m, borderN);
                                    }

                                    var isFoundInOtherCol = findClosedColCandidate(closedCandidate, n, borderM, borderN);

                                    if(!isFoundInOtherCol ){
                                        isChanged = isChanged + processClosedColCandidate(closedCandidate, n, borderM);
                                    }

                                }
                            }
                        }
                    }

                    //block was finished
                    if (isNotNull) {

                        //      isChanged += processHiddenCandidate(amountOfCandidates, candidates, tempValues);
                    }
                }
            }
        }
        return isChanged;
    }


        function findClosedRowCandidate(closedCandidate, m, borderM, borderN) {
            var isFound = 0;
            for (var m1 = borderM[0]; m1<= borderM[1]; m1++){
                if(m != m1){
                    for (var n1 = borderN[0]; n1 <= borderN[1]; n1++){
                        if(cloneTempValues[m1][n1]!=null){
                            if(cloneTempValues[m1][n1].indexOf(closedCandidate)>=0){
                                isFound++;
                                break;
                            }
                        }
                    }
                }
            }
            return isFound;
        }


        function processClosedRowCandidate(closedCandidate, m, borderN){
            var isChanged = 0;
            for(var _c = 0; _c < 9; _c++){
                if( _c < borderN[0] || _c > borderN[1]) {
                    if (cloneTempValues[m][_c]!=null){
                        var posCand = cloneTempValues[m][_c].indexOf(closedCandidate);
                        if ( posCand >= 0 ){
                            cloneTempValues[m][_c].splice(posCand, 1);
                            isChanged++;

                            if(cloneTempValues[m][_c].length == 1){
                                setValueInCell(m, _c, cloneTempValues[m][_c]);
                            }
                            else{
                                if (cloneTempValues[m][_c].length == 0) {
                                   console.log("solution was incorrect");


                                }
                            }

                        }
                    }
                }
            }
            return isChanged;
        }

        function findClosedColCandidate(closedCandidate, n, borderM, borderN){
            var isFound = 0;
            for (var m1 = borderM[0]; m1<= borderM[1]; m1++){
                for (var n1 = borderN[0]; n1 <= borderN[1]; n1++){
                    if(n != n1){
                        if(cloneTempValues[m1][n1]!=null){
                            if(cloneTempValues[m1][n1].indexOf(closedCandidate)>=0){
                                isFound++;
                                break;
                            }
                        }
                    }
                }
            }
            return isFound;
        }

        function processClosedColCandidate(closedCandidate, n, borderM){
            var isChanged = 0;
            for(var i = 0; i < 9; i++){
                if( i < borderM[0] || i > borderM[1]) {
                    if (cloneTempValues[i][n] != null){
                        var posCand = cloneTempValues[i][n].indexOf(closedCandidate);

                        if ( posCand >= 0 ){
                            cloneTempValues[i][n].splice(posCand, 1);
                            isChanged++;

                            if(cloneTempValues[i][n].length == 1){
                                setValueInCell(i, n, cloneTempValues[i][n]);
                            }
                            else{
                                if (cloneTempValues[i][n].length == 0) {
                                    console.log("solution was incorrect");
                                }
                            }

                        }
                    }
                }
            }
            return isChanged;
        }
        function isUnsolvedCell() {
            var solvedCells = 0

            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    if (cloneTempValues[i][j] != null) {
                        if (cloneTempValues[i][j].length == 1) {
                            setValueInCell(i, j, cloneTempValues[i][j][0]);
                        } else {
                            //cell contain several possible values
                        }
                    } else {
                        solvedCells++;
                    }
                }
            }

            if (solvedCells < totalCells) {
                return true;
            } else {
                return false;
            }
        }

        function isCellWithOnePosValue() {
            var changedCells = 0

            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    if (cloneTempValues[i][j] != null) {
                        if (cloneTempValues[i][j].length == 1) {
                            setValueInCell(i, j, cloneTempValues[i][j][0]);
                            changedCells++;
                        } else {
                            //cell contain several possible values so do nothing
                        }
                    } else {
                        //    already with number value
                    }
                }
            }
            return changedCells;
        }


        function setValueInCell(_row, _col, _value) {
            writeDown(_row, _col, _value, [], null);
            changeDepPosValues(_row, _col, _value);
        }


        function writeDown(_row, _col, _value, _variantsValues, _matrixBefore) {

            solution.push({
                row: _row,
                column: _col,
                selectedValue: _value,
                variantValues: _variantsValues,
                matrixBefore: _matrixBefore
            });

            cloneTempValues[_row][_col] = null;

            console.log("row ="+ _row+" col="+_col+" value="+_value);
            for (var i = 0; i < 9; i++) {
                var result = "";
                for (var j = 0; j < 9; j++) {
                    if(cloneTempValues[i][j] != null){
                        if(cloneTempValues.length == 1){
                            console.log("SOS");
                        }
                    }
                }

            }



            var isLast = isLastFilledCell(_row, _col);

            if(isLast){

                if(!isCorrectLastCell(isLast, _row, _col)){
                    changeSolution();
                }
            }

            if (solution.length == amountOfZeros) {
                //we fulfill the last cells
                insertSolutionToMatrix();
               return resultMatrix;


            }

        }

        function changeSolution(){

            for (var i = solution.length-1; i>=0; i--){
                if(i!=20 && solution[i].variantValues.length > 0){

                    var changedSolution = solution.pop();


                    var row = changedSolution.row;
                    var col = changedSolution.column;
                    var value = changedSolution.variantValues.pop();

                    var altValues = [];
                    if(changedSolution.variantValues.length > 0){
                        altValues = changedSolution.variantValues;
                    }



                    for (var i = 0; i < 9; i++){
                        for (var j = 0; j < 9; j++){
                            cloneTempValues[i][j] = changedSolution.matrixBefore[i][j];
                        }
                    }

                    writeDown(row, col, value, altValues, changedSolution.matrixBefore);
                    changeDepPosValues(row, col, value)
                    break;


                } else{
                    solution.pop();
                }
            }

        }


        function insertSolutionToMatrix() {
            //insert solutions
            for (var i = 0; i < solution.length; i++) {
                var iRow = solution[i].row;
                var iCol = solution[i].column;

                resultMatrix[iRow][iCol] = solution[i].selectedValue;

            }
        }


        function isLastFilledCell(row, col){

            var isLastInRow = 0;
            for(j = 0; j < 9; j++){
                if(cloneTempValues[row][j]!=null) {
                    isLastInRow++;
                    break;
                }
            }

            var isLastInCol = 0;
            for(i = 0; i < 9; i++){
                if(cloneTempValues[i][col]!=null) {
                    isLastInCol++;
                }
            }

            var isLastInBlock = 0;
            var borderR = detBlockIndexes(row);
            var borderC = detBlockIndexes(col);
            for (var i = borderR[0]; i <= borderR[1]; i++) {
                for (var j = borderC[0]; j <= borderC[1]; j++) {
                    if (cloneTempValues[i][j] != null) {
                        isLastInBlock++;
                    }
                }
            }

            if (isLastInRow && isLastInCol && isLastInBlock){
                return false;
            } else{
                var isLast = [];

                isLast.push(isLastInRow);
                isLast.push(isLastInCol);
                isLast.push(isLastInBlock);

                return isLast;
            }
        }

        function isCorrectLastCell(isLast, _row, _col){

            var isCorrect = 1;
            var sum = 0;
            if(!isLast[0]){
                //check that row is correct
                for(j = 0; j < 9; j++){
                    sum = sum + matrix[_row][j];
                }

                for (var i1 = 0; i1 < solution.length; i1++) {
                    if( _row == solution[i1].row ){
                        sum = sum + solution[i1].selectedValue;
                    }
                }

                if(sum != correctSum){
                    isCorrect = 0;
                    return isCorrect;
                }

            }
            if(!isLast[1]){
                //check that column is correct

                sum = 0;
                for(i = 0; i < 9; i++){
                    sum = sum + matrix[i][_col];
                }

                for (var i1 = 0; i1 < solution.length; i1++) {
                    if( _col == solution[i1].column){
                        sum = sum + solution[i1].selectedValue;
                    }
                }

                if(sum != correctSum){
                    isCorrect = 0;
                    return isCorrect;
                }

            }
            if(!isLast[2]){
                //check that block is correct
                sum = 0;
                var borderR = detBlockIndexes(_row);
                var borderC = detBlockIndexes(_col);
                for (var i = borderR[0]; i <= borderR[1]; i++) {
                    for (var j = borderC[0]; j <= borderC[1]; j++) {
                        sum = sum + matrix[i][j];
                    }
                }

                for (var i1 = 0; i1 < solution.length; i1++) {
                    if( ( solution[i1].row >= borderR[0]  && solution[i1].row <= borderR[1] )  &&
                        ( solution[i1].column >= borderC[0]  && solution[i1].column <= borderC[1] )){
                        sum = sum + solution[i1].selectedValue;
                    }
                }
                if(sum != correctSum){
                    isCorrect = 0;
                    return isCorrect;
                }

            }

            return isCorrect;
        }


    return resultMatrix;
}