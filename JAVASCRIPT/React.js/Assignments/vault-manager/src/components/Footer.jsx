export default function Footer(){
    return (
      <>
        <footer class="border-t border-neutral-800 mt-12 py-8 px-8">
          <div class="max-w-7xl mx-auto flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
            <div class="flex gap-6">
              <a href="#" class="hover:text-white transition">
                About
              </a>
              <a href="#" class="hover:text-white transition">
                Blog
              </a>
              <a href="#" class="hover:text-white transition">
                Features
              </a>
              <a href="#" class="hover:text-white transition">
                Help & Feedback
              </a>
            </div>
            <p class="text-xs uppercase tracking-[0.3em] text-neutral-600">
              © Learn with Sumit — All rights reserved
            </p>
          </div>
        </footer>
      </>
    );
}
