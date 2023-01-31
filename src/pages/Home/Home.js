import ReactPaginate from "react-paginate";
import { Card } from "../../components/Card/Card";
import { Sidebar } from "../../components/Sidebar";
import LoadingGif from "../../assets/images/loading.svg";

export const Home = ({
  datas,
  pageCount,
  clearAllFunc,
  setPageCount,
  setSearchVal,
  setStatus,
  setGender,
}) => {
  const handlePageClick = (evt) => {
    setPageCount(evt.selected + 1);
  };

  return (
    <main>
      <section className="my-5">
        <div className="container">
          <div>
            <form>
              <div className="input-group">
                <input
                  className="form-control rounded-5 rounded-end"
                  type="search"
                  onChange={(evt) => {
                    setPageCount(1);
                    setSearchVal(evt.target.value);
                  }}
                  placeholder="Search..."
                  autoFocus
                />
                <button className="btn btn-primary rounded-5 rounded-start">
                  Search
                </button>
              </div>
            </form>
            <div className="row my-5">
              <Sidebar
                setStatus={setStatus}
                setGender={setGender}
                clearAllFunc={clearAllFunc}
              />

              {datas.isError ? (
                <h2 className="h2 display-5 fw-bold text-danger col-12 col-lg-9 text-center my-5">
                  {datas.isError}
                </h2>
              ) : (
                ""
              )}
              {datas.isLoading ? (
                <img
                  src={LoadingGif}
                  width="300"
                  height="300"
                  alt="Loading gif"
                  style={{
                    postion: "absolute",
                    right: 0,
                    left: 0,
                    zIndex: "2",
                    margin: "auto",
                    width: "300px",
                  }}
                />
              ) : (
                ""
              )}
              {datas.data?.results?.length ? (
                <ul className="list-unstyled col-12 col-lg-9  row gap-3 justify-content-center">
                  {datas?.data?.results?.map((data, i) => (
                    <Card obj={data} key={i} />
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
          <ReactPaginate
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            onPageChange={(evt) => handlePageClick(evt)}
            pageCount={Math.ceil(datas.data?.info?.pages)}
            initialPage={pageCount}
            nextLabel="Next"
            previousLabel="Prev"
            previousLinkClassName="btn btn-primary"
            nextLinkClassName="btn btn-primary"
            activeClassName="active"
          />
        </div>
      </section>
    </main>
  );
};
