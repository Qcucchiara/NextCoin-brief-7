import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../../ui/button'
import { buyCrypto } from '@/services/cryptoAPI/crypto/buyCrypto'

import { sellCrypto } from '@/services/cryptoAPI/crypto/sellCrypto'

export const BuyCryptoModal = ({ cryptoId }: { cryptoId: string }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  }
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const [amount, setAmount] = useState(0)

  function HandleCrypoBuy() {
    buyCrypto({ id_crypto: cryptoId, amount: amount })
      .then((res) => {
        console.log(res)
        alert('success')
        handleClose()
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="mr-6 w-24">
      <Button variant={'default'} onClick={handleOpen}>
        Buy
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Buy Crypto</h3>
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value))
            }}
            className="text-black indent-3 border-2 border-black  w-full"
            placeholder="how many tokens?"
            required
          />

          <div className="flex items-center">
            <Button
              variant={'secondary'}
              onClick={handleClose}
              className=" w-32 p-2 m-4 "
            >
              Cancel
            </Button>
            <Button
              variant={'default'}
              className=" w-32 p-2 m-4 "
              onClick={() => {
                HandleCrypoBuy()
              }}
            >
              Confirm
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export const SellCryptoModal = ({ cryptoId }: { cryptoId: string }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  }
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const [amount, setAmount] = useState(0)

  function HandleCrypoBuy() {
    sellCrypto({ id_crypto: cryptoId, amount: amount })
      .then((res) => {
        console.log(res)
        alert('success')
        handleClose()
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="mr-6 w-24">
      <Button variant={'default'} onClick={handleOpen}>
        Sell
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Sell Crypto</h3>
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value))
            }}
            className="text-black indent-3 border-2 border-black  w-full"
            placeholder="how many tokens?"
            required
          />

          <div className="flex items-center">
            <Button
              variant={'secondary'}
              onClick={handleClose}
              className=" w-32 p-2 m-4 "
            >
              Cancel
            </Button>
            <Button
              variant={'default'}
              className=" w-32 p-2 m-4 "
              onClick={() => {
                HandleCrypoBuy()
              }}
            >
              Confirm
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
