import React from 'react'

const Loader = () => {
    return (
        <div className='p-4'>
            {/* used bootstrap spinner to get the loading animation  */}
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
