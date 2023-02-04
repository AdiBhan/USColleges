function Footers(props) {
  return (
    <>
      <div className={background}>
        <footer class={footer_background}>
          <p></p>
          <span class={footer_text}>
            All Rights Reserved | Created by Adi Bhan with ❤️ from GitHub ➡️
            <a
              href="https://github.com/AdiBhan/Portfolio"
              className={footer_hover}
            >
              Click to view source
            </a>
            .
          </span>
        </footer>
      </div>
    </>
  );
}
export default Footers;
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND

const footer_background =
  "z-50 round-full m-1 rounded-lg border border-black content-center	 p-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 to-black   shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-zinc-900";
const footer_text =
  "italic z-50 bounce2  text-sm text-right text-gray-400 sm:text-center text-white dark:text-zinc-100";
const footer_hover =
  "z-50 bounce2  hover:text-blue-500 hover:underline hover:scale-110 text-white";
const background =
  "z-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-2 m-5 ";

//-------------------------------------------------------------------------------------------------
