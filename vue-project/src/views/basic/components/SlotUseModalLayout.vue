<template>
	<modal-layout>
		<template #header>
			<h1>Popup title</h1>
		</template>
		<template #default>
			<p>Popup content</p>
			<p>Popup content2</p>
		</template>
		<template #footer>
			<button type="button">close</button>
		</template>
	</modal-layout>
</template>

<script>
import SlotModalLayout from '../../../components/SlotModalLayout.vue'

export default{
	// dict형식으로 key:value로 component 별로 묶어서 사용가능
	components: {"modal-layout" : SlotModalLayout}, 
}
</script>