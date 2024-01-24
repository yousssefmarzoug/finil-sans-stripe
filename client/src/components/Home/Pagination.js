import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setPage } from '../../lib/state/actions'

const Pagination = () => {
	const dispatch = useDispatch()
	const { items, pageIndex } = useSelector(state => ({ ...state.products }));
	const updatePage = (event, index) => {
		event.preventDefault()
		dispatch(setPage(index))
	}
	const Previous = React.useMemo(() => { 
		return { isDisabled: pageIndex === 0 }
	}, [pageIndex])
	const Next = React.useMemo(() => { 
		return { isDisabled: pageIndex === items.length - 1  }
	}, [pageIndex,items.length])
		
    return (
		!!items.length &&
		<nav aria-label="Page navigation example" className="float-right" style={{ marginBottom: '100px' }}>
  <ul className="pagination">
    <li className={`page-item ${Previous.isDisabled ? 'disabled' : ''}`}>
      <button className="page-link" onClick={(e) => updatePage(e, pageIndex - 1)} disabled={Previous.isDisabled}>
        Previous
      </button>
    </li>
    {items.map((_, index) => (
      <li key={index} className="page-item">
        <button className="page-link" onClick={(e) => updatePage(e, index)}>
          {index + 1}
        </button>
      </li>
    ))}
    <li className={`page-item ${Next.isDisabled ? 'disabled' : ''}`}>
      <button className="page-link" onClick={(e) => updatePage(e, pageIndex + 1)} disabled={Next.isDisabled}>
        Next
      </button>
    </li>
  </ul>
</nav>
)
}
export default Pagination