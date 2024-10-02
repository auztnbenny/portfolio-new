import SectionHeader from "../ui/SectionHeader";
import { galleryItems } from "../../utils"; // We'll create this
import GalleryItem from "../cards/GalleryItem"; // We'll create this

const Gallery = () => {
    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8" id="gallery">
            <SectionHeader title={"Gallery."} subtitle={"My Visual Journey"} />

            <div className="flex justify-center items-center mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 px-7 md:px-0 gap-5">
                    {galleryItems.map((item, idx) => (
                        <GalleryItem item={item} key={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery