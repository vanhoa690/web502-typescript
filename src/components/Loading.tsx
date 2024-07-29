type LoadingProps = {
  isShow: boolean;
};

function Loading({ isShow }: LoadingProps) {
  return (
    <>
      {isShow && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
