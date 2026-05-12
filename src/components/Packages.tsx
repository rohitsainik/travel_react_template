import { IndianPackages } from './IndianPackages';
import { InternationalPackages } from './InternationalPackages';

export function Packages() {
  return (
    <section id="packages" className="py-24 bg-[#F9FAFB] font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <IndianPackages />
        <InternationalPackages />
      </div>
    </section>
  );
}
