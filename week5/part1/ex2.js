/* Task 2
Your task is to create a class to handle paginated content in a website. A pagination is used
to divide long lists of content into a series of pages.

The Pagination class will accept 2 parameters:
● items (default: []): An array of contents to paginate.
● pageSize (default: 10): The amount of items to show in each page.

So for example we could initialize our pagination like this:
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);

And then use the method getVisibleItems to show the contents of the paginated array.
console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]

You will have to implement various methods to go through the pages such as:
● prevPage
● nextPage
● firstPage
● lastPage
● goToPage
Here's a continuation of the example above using nextPage and lastPage:
p.nextPage();
console.log(p.getVisibleItems());
// ["e", "f", "g", "h"]
p.lastPage();
console.log(p.getVisibleItems());
// ["y", "z"] */


class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = pageSize;
        this.currentPage = 1;
        this.pageCounts = Math.ceil(this.items.length / this.pageSize);
    }

    firstPage() {
        this.currentPage = 1;
    }

    lastPage() {
        this.currentPage = this.pageCounts;
    }

    prevPage() {
        if(this.currentPage !== 1){
            this.currentPage--;
        }
    }

    nextPage() {
        if(this.currentPage !== this.pageCounts) {
            this.currentPage++;
        }
    }

    goToPage(pageNum) {
        this.currentPage = pageNum;
    }
    
    getVisibleItems() {
        return this.items.slice(this.pageSize * (this.currentPage - 1) , this.currentPage * this.pageSize);
    }
}  



const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4); 
p.goToPage(3);
p.prevPage();
p.nextPage();
console.log(p.getVisibleItems());