import React, { useEffect } from 'react';
import OGSocialPreview from '../components/widgets/OGSocialPreview';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialPreviewPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-[#F8F9FC] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-sora font-semibold text-[#6C3FFC] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
      <OGSocialPreview />
    </div>
  );
}
