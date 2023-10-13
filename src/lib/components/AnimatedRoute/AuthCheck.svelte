<script>
    import { auth, user } from '$lib/firebase'
    import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log('fon!', user)
    }

</script>

{#if $user}
    <slot/>
{:else}
    <p class="text-error my-10">
        You must be signed in to view this page.
        <a href="/logn" class="btn btn-primary">Sign in</a>
    </p>
{/if}