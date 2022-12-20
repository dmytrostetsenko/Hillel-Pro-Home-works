function Student (name, faculty, marks) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;
    this.getAvgMark = function () {
        return this.marks.reduce((acc, current) => acc + current) / marks.length;
    };
    this.getMedianMark = function () {
        const mid = Math.floor(this.marks.length / 2);
        this.marks.sort((a, b) => a - b);
        return this.marks.length % 2 !== 0 ? this.marks[mid] : (this.marks [mid - 1] + this.marks[mid]) / 2;
    };
    this.getMaxMark = function () {
        return this.marks.reduce((acc, current) => { 
            return (acc > current ? acc : current)
        });
    };
    this.getMinMark = function () {
        return this.marks.reduce((acc, current) => { 
            return (acc < current ? acc : current)
        });
    };
    this.getTotal = function () {
        return this.marks.reduce((acc, current) => acc + current);
    };
    this.getInfo = function () {
        return `Name: ${this.name}\nFaculty: ${this.faculty}\nTotal grade: ${this.getTotal()}`
    };
};