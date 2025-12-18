export default function VaultForm() {
  return (
    <>
      <div class="max-w-7xl mx-auto mt-8 px-4">
        <form class="mb-10 rounded-2xl border border-neutral-800 bg-linear-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <div class="mb-8 flex flex-col gap-3">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              New bookmark
            </p>
            <h2 class="text-2xl font-semibold">
              Store website credentials safely
            </h2>
            <p class="text-sm text-neutral-400">
              Fill the details below. Your brand color helps us render a
              matching favicon.
            </p>
          </div>

          <div class="space-y-6">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* <!-- Website URL Input --> */}
              <label class="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span class="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Website URL
                </span>
                <input
                  type="url"
                  placeholder="https://example.com"
                  class="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                />
                <span class="text-xs text-neutral-500">
                  Include https:// for best results.
                </span>
              </label>

              {/* <!-- Color Picker --> */}
              <div class="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Favicon color
                    </p>
                    <p class="text-xs text-neutral-500">
                      Select the accent color we should render.
                    </p>
                  </div>
                  <input
                    type="color"
                    value="#3b82f6"
                    class="h-12 w-12 cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 shadow-inner shadow-black/50"
                  />
                </div>
                <div class="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                  <span class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-[10px] font-semibold uppercase text-neutral-400">
                    Hex
                  </span>
                  <span>Matches any brand primary color.</span>
                </div>
              </div>

              {/* <!-- Category Select --> */}
              <label class="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span class="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Category
                </span>
                <select class="w-full bg-transparent text-base text-white outline-none">
                  <option class="bg-neutral-900 text-white">
                    Select category
                  </option>
                  <option class="bg-neutral-900 text-white">Social</option>
                  <option class="bg-neutral-900 text-white">Video</option>
                  <option class="bg-neutral-900 text-white">Design</option>
                  <option class="bg-neutral-900 text-white">Streaming</option>
                  <option class="bg-neutral-900 text-white">
                    Productivity
                  </option>
                  <option class="bg-neutral-900 text-white">
                    Entertainment
                  </option>
                  <option class="bg-neutral-900 text-white">Shopping</option>
                  <option class="bg-neutral-900 text-white">Music</option>
                </select>
                <span class="text-xs text-neutral-500">
                  Helps you filter quicker later.
                </span>
              </label>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* <!-- Username Input --> */}
              <label class="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span class="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Username
                </span>
                <input
                  type="text"
                  placeholder="Enter username"
                  class="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                />
                <span class="text-xs text-neutral-500">
                  Use workspace or personal handle.
                </span>
              </label>

              {/* <!-- Password Input --> */}
              <label class="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span class="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Password
                </span>
                <input
                  type="password"
                  placeholder="Enter password"
                  class="w-full bg-transparent text-base text-white placeholder:text-neutral-500 focus:outline-none"
                />
                <span class="text-xs text-neutral-500">
                  Choose at least 6 characters.
                </span>
              </label>
            </div>
          </div>

          <div class="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div class="text-xs text-neutral-500">
              By submitting you confirm the entry is safe to store.
            </div>
            <div class="flex flex-1 justify-end gap-3">
              <button
                type="reset"
                class="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
              >
                Clear
              </button>
              <button
                type="submit"
                class="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
              >
                Add Bookmark
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
