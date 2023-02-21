import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'

function CartToggle() {
  const btnProps = useCartToggleButton()
  const totalItems = btnProps['data-items']

  return (
    <Button
      data-fs-cart-toggle
      counter={totalItems}
      aria-label={`Cart with ${btnProps['data-items']} items`}
      icon={<Icon name="Bag" width={25} height={25} />}
      {...btnProps}
    />
  )
}

export default CartToggle
