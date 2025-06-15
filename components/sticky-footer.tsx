export default function StickyFooter() {
  return (
    <div className="bg-gray-800 text-gray-300 py-3 text-center text-sm border-t border-gray-700">
      <div className="container mx-auto px-4">
        <p>
          © {new Date().getFullYear()} ALPES Construction Group. All rights reserved. Licensed under applicable
          construction and business regulations.
        </p>
      </div>
    </div>
  )
}
