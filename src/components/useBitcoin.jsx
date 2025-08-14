import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

const useBitcoin = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const idRef = useRef()

  const getData = async () => {
    setLoading(true)
    await axios
      .get(
        'https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=BTC-USD&api_key=3be53c044e85d38abb14cb76a969185294a01be2f2ac3d2a2e5fae4e0e6e922c'
      )
      .then((response) => response.data)
      .then((resp) => {
        console.log(resp)
        setLoading(false)
        setData(resp['Data']['BTC-USD'])
      })
      .catch((error) => {
        setLoading(false)
        console.error('Error fetching current Bitcoin price:', error)
      })
  }

  useEffect(() => {
    idRef.current = setInterval(() => getData(), 1000)
    return () => clearInterval(idRef.current)
  }, [])

  return { data, loading }
}
export default useBitcoin
