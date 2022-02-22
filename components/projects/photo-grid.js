export default function PhotoGrid({ rows }) {
  return (
    <div>
      {rows.map((row, index) => {
        return (
          <div
            key={index}
            className={`grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-${row.images.length} mb-2 sm:mb-3`}
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
