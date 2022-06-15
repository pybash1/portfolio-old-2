interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Tools: React.FC<IndexPageProps> = ({ inputRef }) => {
  return (
    <div ref={inputRef} className="dark:bg-gray-900 dark:text-white h-max">
      <h2 className="text-3xl text-center p-10">Welcome to My Portfolio</h2>
      <h4 className="text-md text-center">
        Here is the list of tools and technologies I use on a daily basis!
      </h4>
      <div className="text-xl px-10 pt-8">Code Editors / IDEs</div>
      <div className="grid grid-cols-3 gap-8 p-10">
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://code.visualstudio.com"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">
            Visual Studio Code
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            I use Visual Studio Code for Frontend development with JavaScript
            mostly along with any other languages.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://www.jetbrains.com/pycharm/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">PyCharm</h3>

          <p className="mt-4 text-sm text-gray-300">
            I use PyCharm for all my Python projects. It is a great IDE for
            Python development which is ok-ishly customizable.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://neovim.io/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">
            Neovim (SpaceVim)
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            I use Neovim for editing config files or small scripts quickly and
            easily from the terminal or through Neovide. I use the SpaceVim
            theme.
          </p>
        </a>
      </div>
      <div className="text-xl px-10 pt-8">Terminal</div>
      <div className="grid grid-cols-3 gap-8 p-10">
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://hyper.is"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">Hyper</h3>

          <p className="mt-4 text-sm text-gray-300">
            I used to use and love Windows Terminal. But recently I switched to
            Hyper Terminal. It is a great terminal with a lot of features. I
            really like how its super extensible and customizable. And although,
            uses Electron in the backend, it uses really less resources.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/microsoft/terminal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">
            Windows Terminal (Old)
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            I was an avid Windows Terminal user. I loved it, but Hyper is just
            better for me. But I must be honest, I just loved the acrylic blur
            feature!
          </p>
        </a>
      </div>
      <div className="text-xl px-10 pt-8">Shell</div>
      <div className="grid grid-cols-3 gap-8 p-10">
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/PowerShell/PowerShell"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">PowerShell Core/PWSH (Oh-My-Posh)</h3>

          <p className="mt-4 text-sm text-gray-300">
            PowerShell or PWSH is my shell of choice for windows.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://ohmyz.sh"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">
            Zsh (Oh-My-Zsh)
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            Zsh along with Oh-My-Zsh is my shell of choice for Linux/Arch.
          </p>
        </a>
      </div>
      <div className="text-xl px-10 pt-8">Browser</div>
      <div className="grid grid-cols-3 gap-8 p-10">
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://minbrowser.org"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">Min</h3>

          <p className="mt-4 text-sm text-gray-300">
            I recently discovered this new minimal and modern browser, Min. And
            so, far I like it and I am using it as my daily driver. I was a
            Firefox user before this.
          </p>
        </a>
      </div>
      <div className="text-xl px-10 pt-8">Other Tools</div>
      <div className="grid grid-cols-3 gap-8 p-10">
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/prabirshrestha/dwm-win32"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">DWM Win32</h3>

          <p className="mt-4 text-sm text-gray-300">
            I use the Windows Port of DWM as my Window Manager on Windows. So
            far, it is the best tiling window manager I have found for windows,
            with no bugs till now.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/yuk7/ArchWSL"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">Arch WSL</h3>

          <p className="mt-4 text-sm text-gray-300">
            I use Arch Linux as my distro for WSL.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://www.rainmeter.net/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">Rainmeter</h3>

          <p className="mt-4 text-sm text-gray-300">
            I use Rainmeter to customize desktop.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://obsidian.md/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">Obsidian</h3>

          <p className="mt-4 text-sm text-gray-300">
            I use Obsidian for note-taking. It is by far one of the best note
            taking apps out there. Previously I had used Notion and Logseq.
            Logseq is mostly similar to Obsidian but it is still very early in
            development.
          </p>
        </a>
      </div>
      <div className="text-xl px-10 pt-8">Hyper Plugins/Extensions</div>
      <div className="grid grid-cols-3 gap-8 p-10">
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hyper-dracula</h3>

          <p className="mt-4 text-sm text-gray-300">Dracula Theme for Hyper.</p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hyper-yes</h3>

          <p className="mt-4 text-sm text-gray-300">
            Automatically say yes to the &quot;Terminate Batch Job (Y/N)&quot; prompt.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">
            hyper-single-instance
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            Create a New tab instead of opening new window, when new instances
            are launched.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hyper-opacity</h3>

          <p className="mt-4 text-sm text-gray-300">
            Change the window opacity.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hyperline</h3>

          <p className="mt-4 text-sm text-gray-300">
            Show a status line at the bottom of the terminal.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hypercwd</h3>

          <p className="mt-4 text-sm text-gray-300">
            Open New tabs in the same directory as the currently open tab.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">
            hyperterm-summon
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            Global systemwide shortcut to open/hide Hyper
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hyperlinks</h3>

          <p className="mt-4 text-sm text-gray-300">
            Detect and open hyperlinks in default browser on click.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hyperdocs</h3>

          <p className="mt-4 text-sm text-gray-300">
            See documentation right in the terminal.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hypergoogle</h3>

          <p className="mt-4 text-sm text-gray-300">
            Search google from inside Hyper.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">hyper-tab-icons</h3>

          <p className="mt-4 text-sm text-gray-300">Show icons in tabs</p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">
            hyper-fading-scrollbar
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            Fade the scrollbar when not using.
          </p>
        </a>
      </div>
      <div className="text-xl px-10 pt-8">Rainmeter Skins</div>
      <div className="grid grid-cols-3 gap-8 p-10">
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/Droptop-Four/Basic-Version"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">Droptop4</h3>

          <p className="mt-4 text-sm text-gray-300">Droptop4 is the skin I use for the top bar.</p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/Jax-Core/JaxCore"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">JaxCore</h3>

          <p className="mt-4 text-sm text-gray-300">
            JaxCore is an a rainmeter skin/tool for managing other skins and/or plugins.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/Jax-Core/ModularClocks"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">
            ModularClocks
          </h3>

          <p className="mt-4 text-sm text-gray-300">
            The clock skin I use.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/Jax-Core/ModularPlayers"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">ModularPlayers</h3>

          <p className="mt-4 text-sm text-gray-300">
            Music Player Skin I use.
          </p>
        </a>
        <a
          className="block p-8 bg-gray-900 hover:border border-gray-800 shadow-xl rounded-xl"
          href="https://github.com/Jax-Core/YourMixer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
          </svg>

          <h3 className="mt-3 text-xl font-bold text-white">YourMixer</h3>

          <p className="mt-4 text-sm text-gray-300">
            Skin/Tool is a mixer for managing output from different applications.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Tools;
