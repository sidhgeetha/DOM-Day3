## Pagination task1 ##
## html ##
1. Created div with class name container .
2. inside div container table with class name   <table class="table table-dark" id="our-table">
3. inside table created table head with row values as ID, Name, email.

   ## JS ## 
1. The pagination function =>
   1. Takes in a dataset (querySet),
   2. the current page number (page), and the number of rows to display per page (rows).
   3. It then calculates which portion of the dataset should be displayed on the current page based on the page number and the specified number of rows.
2. function pageButtons(pages) { } Tells how the page button works.
   1.startPage and endPage are calculated to determine the range of pages to display around the current page.
   2.Add buttons for "First," "Previous," page numbers, "Next," and "Last":
3. function buildTable() {
    var table = $('#table-body')....
   }  tells how to append the data in table when clicks the button.



   ## Calculator task2 ##

   ## HTML ##
   1. Created dic with class name "calculator".
   2. Kept input box for display calculations with type adn place holder  <input type="text" placeholder="0" id="calcu">
   3. Created 5 divs adn each div to have different button values as ac, % ,/,del, numbers 1 to 9 , -, +, = .

      ## JS ##
      
   1. getElementById("calcu"); is input teh values in the input field use by id name  "calcu".
   2. Queryselector all ensures the buttons are inside the class calculator .
   3. let string = "" is used to store input values or expression.
   4. For each method to iterate the each button.
   5. Adding event listener for each button to tell what to do when button clicked.
   6. Set condition when  "Input" =>  That is entire element is displayed in input area and
   7. e.target.innerHTML =>that is   retrieving content inside the specific button that was clicked.
   8. e.target.innerHTML === "AC"  string variable sets empty string and  it is used to clear or reset the current input or expression.
   9. else if (e.target.innerHTML === "DEL")   to clear the entire string when the "DEL" button is clicked.
   10. string += e.target.innerHTML; this appends the content of the clicked button to the existing input expression stored in the string variable.
   11.   And results get  displayed  in the input element.
