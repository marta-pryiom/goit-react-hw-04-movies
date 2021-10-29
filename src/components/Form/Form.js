// export default function Form() {
//   const [searchWord, setSearchWord] = useState('');
//   const handleInputSearch = e => {
//     searchWord(e.target.value);
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(searchWord);
//     reset();
//   };
//   const reset = () => {
//     setSearchWord('');
//   };
//   return (
//     <div>
//       <h1>MoviesPage</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movie"
//           onChange={handleInputSearch}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// }
