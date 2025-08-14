import useBitcoin from './components/useBitcoin'
import Loading from './components/Loading'

function App() {
  const { data, loading } = useBitcoin()

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data && (
          <div className="flex gap-x-5">
            <div> Type: {data['TYPE']}</div>
            <div>Value : {data['VALUE']}</div>
            <div>
              {data['VALUE_FLAG'] == 'UP' ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 19.5L12 4.5M12 4.5L5.25 11.25M12 4.5L18.75 11.25"
                    stroke="#0F172A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 13.5L12 21M12 21L4.5 13.5M12 21L12 3"
                    stroke="#0F172A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        )
      )}
    </>
  )
}

export default App
