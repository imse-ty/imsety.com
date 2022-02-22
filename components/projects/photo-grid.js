export default function PhotoGrid({ rows }) {
  return (
    <div>
      {rows.map((row, index) => {
        return (
          <div
            key={index}
            className={`grid gap-2 sm:gap-3 mb-2 sm:mb-3`}
            style={{ gridTemplateColumns: `repeat(${row.images.length}, 1fr)` }}
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
