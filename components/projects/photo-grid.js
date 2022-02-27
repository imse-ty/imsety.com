export default function PhotoGrid({ rows }) {
  return (
    <div>
      {rows.map((row, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col sm:grid sm:grid-cols-${row.images.length} gap-2 sm:gap-3 mb-2 sm:mb-3`}
          >
            {row.images.map((image, index) => {
              return (
                <img
                  key={index}
                  alt={image.alt}
                  src={image.src}
                  style={{ marginTop: '0px', marginBottom: '0px' }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
