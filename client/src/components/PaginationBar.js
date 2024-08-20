// TODO complete the PaginationBar component
function PaginationBar() {
   const pages = getVisiblePages();
   return (
      <nav className="pagination is-centered">
         <button className="pagination-previous"></button>
      </nav>
   );
}

/**
 *
 * @param {*} current
 * @param {*} total
 *
 * @returns an array of page numbers and special characters to display in the pagination bar
 *
 * @example
 * getVisiblePages(4, 5) // => [1, 2, 3, 4, 5]
 * getVisiblePages(4, 8) // => [1, 2, 3, 4, 5, '>', 8]
 * getVisiblePages(5, 8) // => [1, '<', 4, 5, 6, 7, 8]
 * getVisiblePages(5, 10) // => [1, '<', 4, 5, 6, '>', 10]
 */
function getVisiblePages(current, total) {
   if (total <= 7) {
      return range(total);
   }
   if (current < 5) {
      return [...range(5), ">", total];
   }
   if (current > total - 4) {
      return [1, "<", ...range(5, total - 4)];
   }
   return [1, "<", current - 1, current, current + 1, ">", total];
}

function range(count, start = 1) {
   return Array.from(new Array(count), (x, i) => i + start);
}
