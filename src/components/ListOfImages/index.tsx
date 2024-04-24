import React from 'react';
import { interestList } from '../../assets/data';

interface ListImagesProps {
  setValue: React.Dispatch<React.SetStateAction<{ images: number[] }>>;
  value: { images: number[] };
}

const ListImages: React.FC<ListImagesProps> = ({ setValue, value }) => {

  const selectedImage = (id: number) => {
    setValue((prev) => {
      const index = prev.images.indexOf(id);
      if (index !== -1) {
        const updatedImages = [...prev.images];
        updatedImages.splice(index, 1);
        return { ...prev, images: updatedImages };
      } else {
        return { ...prev, images: [...prev.images, id] };
      }
    });
  };
  

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-3 gap-4">
        {interestList?.map((el, index) => (
          <div key={index}
               onClick={() => { selectedImage(el?.value) }}
               style={{ border: value.images.includes(el?.value) ? '3px solid #ff8c1e' : 'none', borderRadius: '10px' }}>
            <img className="h-full w-auto max-w-full rounded-lg" src={el?.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListImages;
