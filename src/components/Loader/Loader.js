import React from 'react'

const Loader = () => {
    return (
        <div className='p-4'>
            {/* used bootstrap spinner to get the loading animation  */}
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
